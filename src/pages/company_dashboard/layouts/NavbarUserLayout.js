import { useState } from "react";
import NavbarCompany from "../components/navbar/NavbarCompany";
import SideNavbarCompany from "../components/navbar/SideNavbarCompany";

const NavbarUserLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <NavbarCompany />
      <div className="h-full pt-16 flex justify-between">
        <SideNavbarCompany />
        {children}
      </div>
    </div>
  );
};

export default NavbarUserLayout;
