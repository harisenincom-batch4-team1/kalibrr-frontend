import { useEffect } from "react";
import { useUserProfileContext } from "../../context/user-profile-context";
import { userProfileApi } from "../../api";
import HeaderTitle from "../../components/dashboard_user/header/HeaderTitle";
import UserDashboardLayout from "../../layouts/DashboardLayoutUser";
import CardBasicInformation from "../../components/dashboard_user/profile/CardBasicInformation";
import CardCV from "../../components/dashboard_user/profile/CardCV";
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
        axios.put(userProfileApi, {
          name: state.nameInput,
          email: state.emailInput,
          phone: state.phoneInput,
          location: state.locationInput,
          skill: state.skillInput,
          role: state.roleInput,
        }, {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        })
          .then((res) =>
            dispatch({ type: "SUBMIT_SUCCESS", payload: res.data.datas })
          )
          .catch((err) => {
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
      <HeaderTitle title={"Profil"} />
      <div className="max-w-full h-[95%] pb-16 mx-auto px-5 py-5 space-y-5 overflow-hidden overflow-y-scroll scrollbar-hide">
        <CardBasicInformation />
        <CardCV />
      </div>
    </UserDashboardLayout>
  );
};

export default UserDashboardProfile;
