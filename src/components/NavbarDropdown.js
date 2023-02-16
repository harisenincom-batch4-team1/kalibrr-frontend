import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { useGlobalContext } from "../context/global-context";
import { FaSignOutAlt, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";

const NavbarDropdown = () => {
  const { state, dispatch } = useGlobalContext();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    Cookies.remove("kalibrr");
  };

  return (
    <Dropdown icon={FaPaperPlane} label={state.datas.name}>
      <Dropdown.Header>
        <img
          src={state.datas.photo}
          alt="profile"
          className="w-10 h-10 mx-auto mb-5"
        />
        <span className="block text-sm">{state.datas.name}</span>
        <span className="block text-sm font-medium">{state.datas.email}</span>
      </Dropdown.Header>
      <Link to="/job">
        <Dropdown.Item
          icon={FaPaperPlane}
          className="border-b-[1px] border-t-[1px] pb-2"
        >
          Lowongan kerja
        </Dropdown.Item>
      </Link>
      <Link to="/user/dashboard/profile">
        <Dropdown.Item icon={CgProfile} className="py-2">
          Profil
        </Dropdown.Item>
      </Link>
      <Link to="/user/dashboard/application">
        <Dropdown.Item icon={FaPaperclip}>Lamaran</Dropdown.Item>
      </Link>
      <Link to="/user/dashboard/setting">
        <Dropdown.Item icon={AiFillSetting}>Pengaturan</Dropdown.Item>
      </Link>
      <Link to="/">
        <Dropdown.Item
          onClick={handleLogout}
          icon={FaSignOutAlt}
          className="border-t-[1px] pb-2 flex items-center gap-1"
        >
          Keluar
        </Dropdown.Item>
      </Link>
    </Dropdown>
  );
};

export default NavbarDropdown;
