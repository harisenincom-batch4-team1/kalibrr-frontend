import NavbarUser from "../components/navbar/NavbarUser";
import SideNavbarUser from "../components/navbar/SideNavbarUser";
import LoadingBar from "react-top-loading-bar";
import Navbar from "../../../components/Navbar";

const NavbarUserLayout = ({ children }) => {

  return (
    <div className="h-screen overflow-hidden relative">
      <LoadingBar
        className="absolute"
        color="#1C64F2"
        height={3}
        progress={100}
      />
      <Navbar />
      <div className="h-full pt-16 flex justify-between">
        <SideNavbarUser />
        {children}
      </div>
    </div>
  );
};

export default NavbarUserLayout;
