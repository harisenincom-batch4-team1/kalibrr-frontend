import LoadingBar from "react-top-loading-bar";
import NavbarCompany from "../components/dashboard_company/navbar/NavbarCompany";
import SideNavbarCompany from "../components/dashboard_company/navbar/SideNavbarCompany";

const NavbarLayoutCompany = ({ children }) => {
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
        <div className="w-full bg-[#fafafa] h-full overflow-hidden overflow-y-scroll pb-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavbarLayoutCompany;
