import { Link, useLocation } from "react-router-dom";
import { HiDocumentText, HiUserCircle } from "react-icons/hi2";

export const SideNavbarUser = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={
        "w-16 md:w-72 flex flex-col h-full bg-white border-r-[1px] pt-3 sticky"
      }
    >
      <Link to="/user/dashboard/profile" className="py-4 hover:bg-blue-50">
        <div
          className={
            pathname === "/user/dashboard/profile"
              ? "flex items-center space-x-2 px-4 text-blue-500"
              : "flex items-center space-x-2 px-4"
          }
        >
          <HiUserCircle className="h-6 w-6 rounded-lg hover:bg-blue-50" />
          <span className="hidden md:block font-medium">Profil</span>
        </div>
      </Link>
      <Link to="/user/dashboard/application" className="py-4 hover:bg-blue-50">
        <div
          className={
            pathname === "/user/dashboard/application"
              ? "flex items-center space-x-2 px-4 text-blue-500"
              : "flex items-center space-x-2 px-4"
          }
        >
          <HiDocumentText className="h-6 w-6 rounded-lg hover:bg-blue-50" />
          <span className="hidden md:block font-medium">Lamaran</span>
        </div>
      </Link>
    </div>
  );
};
