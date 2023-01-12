import Container from "./layouts/Container";
import HeaderTitle from "./components/header/HeaderTitle";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import CardBasicInformation from "./components/profile/CardBasicInformation";
import CardCV from "./components/profile/CardCV";
import CardContainer from "./layouts/CardContainer";

const DashboardProfile = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Profil"} />
        <CardContainer>
          <CardBasicInformation />
          <CardCV />
        </CardContainer>
      </Container>
    </NavbarUserLayout>
  );
};

export default DashboardProfile;
