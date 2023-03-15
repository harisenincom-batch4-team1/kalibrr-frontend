import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { userProfileApi, userPutPhotoApi } from "api";
import { DashboardLayoutUser } from "layouts";
import { useGlobalContext, useUserProfileContext } from "context";
import { UserProfileSkeleton } from "components";
import axios from "axios";
import Cookies from "js-cookie";
import {
  HeaderTitle,
  CardBasicInformation,
  CardResume,
} from "components/dashboard_user";

export const UserDashboardProfile = () => {
  const data = useGlobalContext();
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
          .then((res) => {
            console.log(res.data.datas);
            dispatch({ type: "FETCH_SUCCESS", payload: res.data.datas });
          })
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
            data.dispatch({ type: "FETCH_USER" });
          })
          .catch((err) => {
            toast.success(err?.message);
            dispatch({ type: "SUBMIT_ERROR", payload: err?.message });
          });
        break;
      }
      case "submitting_photo": {
        let formData = new FormData();
        formData.append("photo", state.photo);
        axios
          .put(userPutPhotoApi, formData, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: "Bearer " + Cookies.get("kalibrr"),
            },
          })
          .then(() => {
            dispatch({ type: "FETCHING" });
            toast.success("Berhasil mengubah foto profil");
          })
          .catch((err) => {
            if (err?.response?.data?.error) {
              return toast.error(err?.response?.data?.error);
            }
            dispatch({ type: "ERROR" });
            return toast.error(err?.message);
          });
        break;
      }
      default:
        break;
    }
  }, [state.tag]);

  return (
    <DashboardLayoutUser>
      <Helmet>
        <title>Profil Pengguna - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitle title={"Profil"} />
      <div className="max-w-full h-[95%] pb-16 mx-auto p-2 space-y-2 overflow-hidden overflow-y-scroll scrollbar-hide">
        {state.tag === "fetching" && <UserProfileSkeleton />}
        {state.tag !== "fetching" && <CardBasicInformation />}
        {state.tag !== "fetching" && <CardResume />}
      </div>
    </DashboardLayoutUser>
  );
};
