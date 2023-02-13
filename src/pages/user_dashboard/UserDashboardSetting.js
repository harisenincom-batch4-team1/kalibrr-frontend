import { useEffect } from "react";
import { useUserSettingContext } from "../../context/user-setting-context";
import { userEmailApi } from "../../api";
import HeaderTitle from "../../components/dashboard_user/header/HeaderTitle";
import UserDashboardLayout from "../../layouts/DashboardLayoutUser";
import CardChangeEmail from "../../components/dashboard_user/setting/CardChangeEmail";
import CardChangePassword from "../../components/dashboard_user/setting/CardChangePassword";
import CardDeleteAccount from "../../components/dashboard_user/setting/CardDeleteAccount";
import axios from "axios";
import Cookies from "js-cookie";

const UserDashboardSetting = () => {
  const { state, dispatch } = useUserSettingContext();

  useEffect(() => {
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH_USER_SETTING" });
        break;
      case "loading":
        axios
          .get(userEmailApi, {
            headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
          })
          .then((res) => {
            console.log(res.data.datas);
            dispatch({
              type: "FETCH_USER_SETTING_SUCCESS",
              payload: res.data.datas.email,
            });
          })
          .catch((err) =>
            dispatch({
              type: "FETCH_USER_SETTING_ERROR",
              payload: err?.message,
            })
          );
        break;
      default:
        break;
    }
  }, [state.tag]);

  return (
    <UserDashboardLayout>
      <HeaderTitle title={"Pengaturan Akun"} />
      <div className="max-w-full h-[95%] pb-16 mx-auto px-5 py-5 space-y-5 overflow-hidden overflow-y-scroll scrollbar-hide">
        <CardChangeEmail />
        <CardChangePassword />
        <CardDeleteAccount />
      </div>
    </UserDashboardLayout>
  );
};

export default UserDashboardSetting;
