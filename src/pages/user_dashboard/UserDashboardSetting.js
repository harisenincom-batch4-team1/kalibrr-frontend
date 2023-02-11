import { useEffect } from "react";
import { useUserSettingContext } from "../../context/user-setting-context";
import { userEmail } from "../../api";
import HeaderTitle from "./components/header/HeaderTitle";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import Container from "./layouts/Container";
import CardContainer from "./layouts/ProfileContainer";
import CardChangeEmail from "./components/setting/CardChangeEmail";
import CardChangePassword from "./components/setting/CardChangePassword";
import CardDeleteAccount from "./components/setting/CardDeleteAccount";
import axios from "axios";
import Cookies from "js-cookie";
import FullScreen from "./components/loading/FullScreen";

const UserDashboardSetting = () => {
  const { state, dispatch } = useUserSettingContext();

  useEffect(() => {
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH_USER_SETTING" });
        break;
      case "loading":
        axios
          .get(userEmail, {
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
    <NavbarUserLayout>
      {state.tag === "loading" && <FullScreen />}
      <Container>
        <HeaderTitle title={"Pengaturan Akun"} />
        <CardContainer>
          <CardChangeEmail />
          <CardChangePassword />
          <CardDeleteAccount />
        </CardContainer>
      </Container>
    </NavbarUserLayout>
  );
};

export default UserDashboardSetting;
