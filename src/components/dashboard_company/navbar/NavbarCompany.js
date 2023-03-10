import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiCog6Tooth,
  HiArrowLeftOnRectangle,
  HiBuildingOffice,
} from "react-icons/hi2";

export const NavbarCompany = () => {
  const [isShowMenuAccount, setIsShowMenuAccount] = useState(false);

  const showMenuAccount = () => {
    setIsShowMenuAccount((prev) => !prev);
  };

  return (
    <div className="w-full h-16 px-5 py-2 bg-white border-b-[1px] flex items-center justify-between fixed z-10">
      <div className="w-24">
        <Link to="/">
          <img src="/assets/logo.svg" alt="kalibrr-logo" />
        </Link>
      </div>
      <div className="">
        <HiBuildingOffice
          className="h-8 w-8 rounded-lg cursor-pointer"
          onClick={showMenuAccount}
        />
      </div>
      {isShowMenuAccount && (
        <div className="w-72 h-fit border-[1px] absolute right-5 top-14 bg-white flex flex-col rounded-md">
          <Link
            to="/company/dashboard/setting"
            className="flex items-center py-3 px-4 hover:bg-blue-50 space-x-2 cursor-pointer"
          >
            <HiCog6Tooth className="h-5" />
            <span className="font-medium">Pengaturan Akun Perusahaan</span>
          </Link>
          <Link
            to="/"
            className="flex items-center py-3 px-4 hover:bg-blue-50 space-x-2 cursor-pointer"
          >
            <HiArrowLeftOnRectangle className="h-5" />
            <span className="font-medium">Keluar</span>
          </Link>
        </div>
      )}
    </div>
  );
};
