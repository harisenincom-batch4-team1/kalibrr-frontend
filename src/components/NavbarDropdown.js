import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { useGlobalContext } from "context";
import { AiFillSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiPapers } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import {
  FaSignOutAlt,
  FaPaperclip,
  FaPaperPlane,
  FaBuilding,
} from "react-icons/fa";
import Cookies from "js-cookie";
import { companyPhotoApi, companyStaticPhotoApi, userPhotoApi } from "api";

export const NavbarDropdown = () => {
  const { state, dispatch } = useGlobalContext();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    Cookies.remove("kalibrr");
    Cookies.remove("kalibrr-company");
  };

  const navbarPhoto = () => {
    if (state.datas.photo === "https://cdn-icons-png.flaticon.com/512/3177/3177440.png") {
      return "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
    } else {
      return userPhotoApi + state.datas.photo
    }
  }

  const navbarPhotoCompany = () => {
    if (state.datas.photo === "https://cdn-icons-png.flaticon.com/512/2098/2098316.png") {
      return "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
    } else{
      return companyStaticPhotoApi + state.datas.photo
    }
  }

  return (
    <Dropdown
      icon={FaPaperPlane}
      label={state.datas.name}
    >
      <Dropdown.Header>
        <img
          src={state.isLogin ? navbarPhoto() : navbarPhotoCompany()}
          alt="profile"
          className="w-10 h-10 mx-auto mb-5 object-cover rounded-full"
        />
        <span className="block text-sm">
          {state.datas.name || state?.datas[0]?.name}
        </span>
        <span className="block text-sm font-medium">
          {state.datas.email || state?.datas[0]?.email}
        </span>
      </Dropdown.Header>
      <Link to="/job">
        <Dropdown.Item
          icon={FaPaperPlane}
          className="border-b-[1px] border-t-[1px] pb-2"
        >
          Lowongan kerja
        </Dropdown.Item>
      </Link>
      {state.isLogin && (
        <Link to="/user/dashboard/profile">
          <Dropdown.Item icon={CgProfile} className="py-2">
            Profil
          </Dropdown.Item>
        </Link>
      )}
      {state.isLoginCompany && (
        <Link to="/company/dashboard/profile">
          <Dropdown.Item icon={FaBuilding} className="py-2">
            Profil
          </Dropdown.Item>
        </Link>
      )}
      {state.isLogin && (
        <Link to="/user/dashboard/application">
          <Dropdown.Item icon={FaPaperclip}>Lamaran</Dropdown.Item>
        </Link>
      )}
      {state.isLoginCompany && (
        <Link to="/company/dashboard/job">
          <Dropdown.Item icon={GiPapers}>Lowongan</Dropdown.Item>
        </Link>
      )}
      {state.isLoginCompany && (
        <Link to="/company/dashboard/applicant">
          <Dropdown.Item icon={BsFillPeopleFill}>Pelamar</Dropdown.Item>
        </Link>
      )}
      {state.isLogin && (
        <Link to="/user/dashboard/setting">
          <Dropdown.Item icon={AiFillSetting}>Pengaturan</Dropdown.Item>
        </Link>
      )}
      {state.isLoginCompany && (
        <Link to="/company/dashboard/setting">
          <Dropdown.Item icon={AiFillSetting}>Pengaturan</Dropdown.Item>
        </Link>
      )}
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
