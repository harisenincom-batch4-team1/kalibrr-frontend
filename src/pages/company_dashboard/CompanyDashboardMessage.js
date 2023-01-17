import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import HeaderSearchMessage from "./components/header/HeaderSearchMessage";

const CompanyDashboardMessage = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderSearchMessage title={"Pesan"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardMessage;
