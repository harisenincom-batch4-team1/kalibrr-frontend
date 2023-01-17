import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import HeaderSearchJob from "./components/header/HeaderSearchJob";

const CompanyDashboardJob = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderSearchJob title={"Lowongan Kerja"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardJob;
