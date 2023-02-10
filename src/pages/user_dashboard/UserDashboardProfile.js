import Container from "./layouts/Container";
import HeaderTitle from "./components/header/HeaderTitle";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import CardBasicInformation from "./components/profile/CardBasicInformation";
import CardCV from "./components/profile/CardCV";
import ProfileContainer from "./layouts/ProfileContainer";

const UserDashboardProfile = () => {
  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Profil"} />
        <ProfileContainer>
          <CardBasicInformation />
          <CardCV />
        </ProfileContainer>
      </Container>
    </NavbarUserLayout>
  );
};

export default UserDashboardProfile;
