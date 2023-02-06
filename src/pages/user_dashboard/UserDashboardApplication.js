import NavbarUserLayout from "./layouts/NavbarUserLayout";
import Container from "./layouts/Container";
import HeaderTitle from "./components/header/HeaderTitle";

const UserDashboardApplication = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Lamaran"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default UserDashboardApplication;
