import LoadingBar from "react-top-loading-bar";
import SideNavbarUser from "../components/SideNavbarUser";
import Navbar from "../components/Navbar";

const UserDashboardLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden relative">
      <LoadingBar
        className="absolute"
        color="#1C64F2"
        height={2}
        progress={100}
      />
      <Navbar />
      <div className="h-full pt-16 flex justify-between">
        <SideNavbarUser />
        <div className="w-full bg-[#fafafa]">{children}</div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
