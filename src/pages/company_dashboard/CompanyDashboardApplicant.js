import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import HeaderSearchApplicant from "./components/header/HeaderSearchApplicant";

const CompanyDashboardApplicant = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderSearchApplicant title={"Pelamar"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardApplicant;
