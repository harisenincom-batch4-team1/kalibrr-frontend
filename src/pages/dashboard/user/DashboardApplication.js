import NavbarUserLayout from "./layouts/NavbarUserLayout";
import Container from "./layouts/Container";
import HeaderSearchApplication from "./components/header/HeaderSearchAppication";

const DashboardApplication = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderSearchApplication title={"Lamaran"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default DashboardApplication;
