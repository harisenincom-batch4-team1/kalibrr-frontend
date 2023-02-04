import CardChangeEmail from "./components/setting/CardChangeEmail";
import CardChangePassword from "./components/setting/CardChangePassword";
import CardDeleteAccount from "./components/setting/CardDeleteAccount";
import CardContainer from "./layouts/CardContainer";
import HeaderTitle from "./components/header/HeaderTitle";
import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";

const CompanyDashboardSetting = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Pengaturan Akun Perusahaan"} />
        <CardContainer>
          <CardChangeEmail />
          <CardChangePassword />
          <CardDeleteAccount />
        </CardContainer>
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardSetting;
