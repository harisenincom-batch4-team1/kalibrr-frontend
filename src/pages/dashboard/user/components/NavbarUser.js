import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const NavbarUser = () => {
  return (
    <div className="w-full h-16 px-5 py-2 bg-white border-b-[1px] flex items-center justify-between fixed z-10">
      <div className="w-24">
        <Link to="/">
          <img src="/assets/logo.svg" alt="kalibrr-logo" />
        </Link>
      </div>
      <div className="">
        <UserCircleIcon className="h-8 w-8 rounded-lg hover:bg-blue-50" />
      </div>
    </div>
  );
};

export default NavbarUser;
