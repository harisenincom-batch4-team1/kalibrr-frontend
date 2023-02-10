import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import HeaderTitle from "./components/header/HeaderTitle";

const CompanyDashboardMessage = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Pesan"} />
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardMessage;
