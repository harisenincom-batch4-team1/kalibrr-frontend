import { useState } from "react";
import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import HeaderTitleSearch from "./components/header/HeaderTitleSearch";

const CompanyDashboardJob = () => {
  const [input, setInput] = useState("");

  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitleSearch
          title={"Lowongan Kerja"}
          placeholder={"Cari lowongan pekerjaan yang sudah di buat"}
          input={input}
          setInput={setInput}
        />
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardJob;
