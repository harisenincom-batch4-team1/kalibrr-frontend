import CardChangeEmail from "./components/card/CardChangeEmail";
import CardChangePassword from "./components/card/CardChangePassword";
import CardDeleteAccount from "./components/card/CardDeleteAccount";
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
