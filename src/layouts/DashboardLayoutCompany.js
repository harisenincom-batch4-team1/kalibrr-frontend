import { Navbar } from "components";
import { SideNavbarCompany } from "components/dashboard_company";
import LoadingBar from "react-top-loading-bar";

export const DashboardLayoutCompany = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden relative">
      <LoadingBar
        className="absolute"
        color="#1C64F2"
        height={2}
        progress={100}
      />
      <Navbar />
      <div className="h-full pt-16 flex justify-between overflow-x-scroll overflow-y-scroll scrollbar-hide overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-full ">
        <SideNavbarCompany />
        <div className="w-full bg-[#fafafa] overflow-hidden scrollbar-hide overflow-y-scroll overflow-x-scroll pb-5">
          {children}
        </div>
      </div>
    </div>
  );
};
