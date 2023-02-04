import { useState } from "react";
import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import HeaderTitleSearch from "./components/header/HeaderTitleSearch";

const CompanyDashboardApplicant = () => {
  const [input, setInput] = useState("");

  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitleSearch
          title={"Pelamar"}
          placeholder={"Cari lamaran"}
          input={input}
          setInput={setInput}
        />
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardApplicant;
