import { useState } from "react";
import { useSelector } from "react-redux";
import NavbarUser from "../components/navbar/NavbarUser";
import SideNavbarUser from "../components/navbar/SideNavbarUser";
import LoadingBar from "react-top-loading-bar";

const NavbarUserLayout = ({ children }) => {
  const tag = useSelector((state) => state.userSettingReducer.tag);
  const progress = useSelector((state) => state.userSettingReducer.progress);

  return (
    <div className="h-screen overflow-hidden relative">
      <LoadingBar
        className="absolute"
        color="#1C64F2"
        height={3}
        progress={100}
      />
      <NavbarUser />
      <div className="h-full pt-16 flex justify-between">
        <SideNavbarUser />
        {children}
      </div>
    </div>
  );
};

export default NavbarUserLayout;
