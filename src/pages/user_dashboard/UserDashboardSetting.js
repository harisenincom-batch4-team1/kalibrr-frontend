import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const tag = useSelector((state) => state.userSettingReducer.tag);
  const email = useSelector((state) => state.userSettingReducer.email);

  useEffect(() => {
    dispatch({ type: "FETCH_USER_SETTING" });
    axios
      .get(process.env.REACT_APP_USER, {
        headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
      })
      .then((res) => {
        dispatch({
          type: "FETCH_USER_SETTING_SUCCESS",
          payload: res.data.datas.email,
        });
      })
      .catch((err) =>
        dispatch({ type: "FETCH_USER_SETTING_ERROR", payload: err?.message })
      );
  }, [email]);

  return (
    <NavbarUserLayout>
      {tag === "loading" && <FullScreen />}
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
