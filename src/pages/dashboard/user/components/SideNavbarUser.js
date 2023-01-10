import { Link, useLocation } from "react-router-dom";
import {
  DocumentTextIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";

const SideNavbarUser = ({ isSidebarShow, setIsSidebarShow }) => {
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
          <UserCircleIcon className="h-6 w-6 rounded-lg hover:bg-blue-50" />
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
          <DocumentTextIcon className="h-6 w-6 rounded-lg hover:bg-blue-50" />
          <span className="hidden md:block font-medium">Lamaran</span>
        </div>
      </Link>
      <Link to="/user/dashboard/saved" className="py-4 hover:bg-blue-50">
        <div
          className={
            pathname === "/user/dashboard/saved"
              ? "flex items-center space-x-2 px-4 text-blue-500"
              : "flex items-center space-x-2 px-4"
          }
        >
          <BookmarkIcon className="h-6 w-6 rounded-lg hover:bg-blue-50" />
          <span className="hidden md:block font-medium">Disimpan</span>
        </div>
      </Link>
      <Link to="/user/dashboard/message" className="py-4 hover:bg-blue-50">
        <div
          className={
            pathname === "/user/dashboard/message"
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

export default SideNavbarUser;
