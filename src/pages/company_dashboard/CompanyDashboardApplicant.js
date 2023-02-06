import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import HeaderTitle from "./components/header/HeaderTitle";

const CompanyDashboardApplicant = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Pelamar"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardApplicant;
