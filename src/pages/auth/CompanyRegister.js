import React from "react";
import NavbarRegister from "../company/components/NavbarRegister";
import CompanyForm from "../company/components/CompanyForm";

const CompanyRegister = () => {
  return (
    <div>
      <div>
        <NavbarRegister />
      </div>
      <div>
        <CompanyForm />
      </div>
    </div>
  );
};

export default CompanyRegister;
