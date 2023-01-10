import { useState } from "react";
import NavbarUser from "./NavbarUser";
import SideNavbarUser from "./SideNavbarUser";

const NavbarUserLayout = ({ children }) => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  
  return (
    <div className="h-screen overflow-hidden">
      <NavbarUser />
      <div className="h-full pt-16 flex justify-between">
        <SideNavbarUser
          isSidebarShow={isSidebarShow}
          setIsSidebarShow={setIsSidebarShow}
        />
        {children}
      </div>
    </div>
  );
};

export default NavbarUserLayout;
