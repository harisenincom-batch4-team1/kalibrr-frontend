import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useUserProfileContext } from "../../context/user-profile-context";
import { userProfileApi } from "../../api";
import { toast, ToastContainer } from "react-toastify";
import HeaderTitle from "../../components/dashboard_user/header/HeaderTitle";
import UserDashboardLayout from "../../layouts/DashboardLayoutUser";
import CardBasicInformation from "../../components/dashboard_user/profile/CardBasicInformation";
import CardResume from "../../components/dashboard_user/profile/CardResume";
import axios from "axios";
import Cookies from "js-cookie";

const UserDashboardProfile = () => {
  const { state, dispatch } = useUserProfileContext();

  useEffect(() => {
    switch (state.tag) {
      case "idle": {
        dispatch({ type: "FETCH" });
        break;
      }
      case "fetching": {
        axios(userProfileApi, {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        })
          .then((res) =>
            dispatch({ type: "FETCH_SUCCESS", payload: res.data.datas })
          )
          .catch((err) => {
            dispatch({ type: "FETCH_ERROR", payload: err?.message });
          });
        break;
      }
      case "submitting": {
        axios
          .put(
            userProfileApi,
            {
              name: state.nameInput,
              email: state.emailInput,
              phone: state.phoneInput,
              location: state.locationInput,
              skill: state.skillInput,
              role: state.roleInput,
            },
            {
              headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
            }
          )
          .then(() => {
            toast.success("Akun berhasil di perbaharui");
            dispatch({ type: "SUBMIT_SUCCESS" });
          })
          .catch((err) => {
            toast.success(err?.message);
            dispatch({ type: "SUBMIT_ERROR", payload: err?.message });
          });
        break;
      }
      default:
        break;
    }
  }, [state.tag]);

  return (
    <UserDashboardLayout>
      <Helmet>
        <title>Profil Pengguna - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <ToastContainer />
      <HeaderTitle title={"Profil"} />
      <div className="max-w-full h-[95%] pb-16 mx-auto p-2 space-y-2 overflow-hidden overflow-y-scroll scrollbar-hide">
        <CardBasicInformation />
        <CardResume />
      </div>
    </UserDashboardLayout>
  );
};

export default UserDashboardProfile;
