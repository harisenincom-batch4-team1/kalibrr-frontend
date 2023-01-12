import HeaderTitle from "./components/header/HeaderTitle";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import Container from "./layouts/Container";

const DashboardUserSetting = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Pengaturan Akun"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default DashboardUserSetting;
