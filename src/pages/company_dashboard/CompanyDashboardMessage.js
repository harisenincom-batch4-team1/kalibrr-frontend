import { useState } from "react";
import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import HeaderTitleSearch from "./components/header/HeaderTitleSearch";

const CompanyDashboardMessage = () => {
  const [input, setInput] = useState("");

  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitleSearch
          title={"Pesan"}
          placeholder={"Cari pesan"}
          input={input}
          setInput={setInput}
        />
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardMessage;
