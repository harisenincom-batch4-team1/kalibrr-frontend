import HeaderTitle from "./components/header/HeaderTitle";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import Container from "./layouts/Container";
import CardContainer from "./layouts/CardContainer";
import CardChangeEmail from "./components/setting/CardChangeEmail";
import CardChangePassword from "./components/setting/CardChangePassword";
import CardDeleteAccount from "./components/setting/CardDeleteAccount";

const UserDashboardSetting = () => {
  return (
    <NavbarUserLayout>
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
