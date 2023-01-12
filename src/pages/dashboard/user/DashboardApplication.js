import HeaderWithSearch from "./components/header/HeaderWithSearch";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import Container from "./layouts/Container";

const DashboardApplication = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderWithSearch title={"Lamaran"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default DashboardApplication;
