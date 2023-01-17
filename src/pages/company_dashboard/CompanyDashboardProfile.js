import Container from "./layouts/Container";
import HeaderTitle from "./components/header/HeaderTitle";
import NavbarUserLayout from "./layouts/NavbarUserLayout";

const CompanyDashboardProfile = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Profil Perusahaan"} />

      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardProfile;
