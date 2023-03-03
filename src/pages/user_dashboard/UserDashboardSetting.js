import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useUserSettingContext } from "context";
import { userEmailApi } from "api";
import { DashboardLayoutUser } from "layouts";
import {
  HeaderTitle,
  CardChangePassword,
  CardDeleteAccount,
} from "components/dashboard_user";
import axios from "axios";
import Cookies from "js-cookie";

export const UserDashboardSetting = () => {
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
    <DashboardLayoutUser>
      <Helmet>
        <title>Pengaturan Akun - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitle title={"Pengaturan Akun"} />
      <div className="w-full h-[98%] md:h-[95%] mx-auto md:pb-14 p-2 space-y-2 overflow-hidden overflow-y-scroll scrollbar-hide">
        <CardChangePassword />
        <CardDeleteAccount />
      </div>
    </DashboardLayoutUser>
  );
};
