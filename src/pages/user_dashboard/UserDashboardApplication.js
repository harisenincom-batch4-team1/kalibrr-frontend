import NavbarUserLayout from "./layouts/NavbarUserLayout";
import Container from "./layouts/Container";
import HeaderSearchApplication from "./components/header/HeaderSearchApplication";

const UserDashboardApplication = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderSearchApplication title={"Lamaran"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default UserDashboardApplication;
