import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Container from "./layouts/Container";
import HeaderTitle from "./components/header/HeaderTitle";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import CardBasicInformation from "./components/profile/CardBasicInformation";
import CardCV from "./components/profile/CardCV";
import CardContainer from "./layouts/CardContainer";

const UserDashboardProfile = () => {
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

export default UserDashboardProfile;
