import HeaderTitle from "./components/header/HeaderTitle";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import Container from "./layouts/Container";

const DashboardMessage = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Pesan"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default DashboardMessage;
