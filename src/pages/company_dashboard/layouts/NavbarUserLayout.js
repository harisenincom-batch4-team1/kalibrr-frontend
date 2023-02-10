import LoadingBar from "react-top-loading-bar";
import NavbarCompany from "../components/navbar/NavbarCompany";
import SideNavbarCompany from "../components/navbar/SideNavbarCompany";

const NavbarUserLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <LoadingBar
        className="absolute"
        color="#1C64F2"
        height={2}
        progress={100}
      />
      <NavbarCompany />
      <div className="h-full pt-16 flex justify-between scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-full ">
        <SideNavbarCompany />
        {children}
      </div>
    </div>
  );
};

export default NavbarUserLayout;
