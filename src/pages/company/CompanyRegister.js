import React from "react";
import NavbarRegister from "./components/NavbarRegister";
import CompanyForm from "./components/CompanyForm";

const CompanyRegister = () => {
  return (
    // <NavbarRegister>
    <div>
      <div>
        <NavbarRegister />
      </div>

      <div>
        <CompanyForm />
      </div>
    </div>
    // </NavbarRegister>
  );
};

export default CompanyRegister;
