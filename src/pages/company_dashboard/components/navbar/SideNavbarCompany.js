import { Link, useLocation } from "react-router-dom";
import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";

const SideNavbarCompany = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={
        "w-16 md:w-72 flex flex-col h-full bg-white border-r-[1px] pt-3 sticky"
      }
    >
      <Link to="/company/dashboard/profile" className="py-4 hover:bg-blue-50">
        <div
          className={
            pathname === "/company/dashboard/profile"
              ? "flex items-center space-x-2 px-4 text-blue-500"
              : "flex items-center space-x-2 px-4"
          }
        >
          <BuildingOfficeIcon className="h-6 w-6 rounded-lg hover:bg-blue-50" />
          <span className="hidden md:block font-medium">Profil Perusahaan</span>
        </div>
      </Link>
      <Link
        to="/company/dashboard/job"
        className="py-4 hover:bg-blue-50"
      >
        <div
          className={
            pathname === "/company/dashboard/job"
              ? "flex items-center space-x-2 px-4 text-blue-500"
              : "flex items-center space-x-2 px-4"
          }
        >
          <BriefcaseIcon className="h-6 w-6 rounded-lg hover:bg-blue-50" />
          <span className="hidden md:block font-medium">Lowongan Kerja</span>
        </div>
      </Link>
      <Link
        to="/company/dashboard/applicant"
        className="py-4 hover:bg-blue-50"
      >
        <div
          className={
            pathname === "/company/dashboard/applicant"
              ? "flex items-center space-x-2 px-4 text-blue-500"
              : "flex items-center space-x-2 px-4"
          }
        >
          <UserGroupIcon className="h-6 w-6 rounded-lg hover:bg-blue-50" />
          <span className="hidden md:block font-medium">Pelamar</span>
        </div>
      </Link>
      <Link
        to="/company/dashboard/message"
        className="py-4 hover:bg-blue-50"
      >
        <div
          className={
            pathname === "/company/dashboard/message"
              ? "flex items-center space-x-2 px-4 text-blue-500"
              : "flex items-center space-x-2 px-4"
          }
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6 rounded-lg hover:bg-blue-50" />
          <span className="hidden md:block font-medium">Pesan</span>
        </div>
      </Link>
    </div>
  );
};

export default SideNavbarCompany;
