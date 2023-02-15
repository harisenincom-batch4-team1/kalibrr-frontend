import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  HiArrowLeftOnRectangle,
  HiBuildingOffice,
  HiCog6Tooth,
  HiNewspaper,
  HiUserCircle,
} from "react-icons/hi2";
import { useGlobalContext } from "../context/global-context";
import Cookies from "js-cookie";

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();
  const [isShowMenuAccount, setIsShowMenuAccount] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const showMenuAccount = () => {
    setIsShowMenuAccount((prev) => !prev);
  };

  const handleLogout = () => {
    Cookies.remove("kalibrr");
    dispatch({ type: "FETCH" });
  };

  useEffect(() => {
    dispatch({ type: "FETCH" });
    if (Cookies.get("kalibrr") !== undefined) {
      dispatch({ type: "FETCH_SUCCESS", payload: true });
    } else {
      dispatch({ type: "FETCH_SUCCESS", payload: false });
    }
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH" });
        break;
      case "fetching":
        if (Cookies.get("kalibrr") !== undefined) {
          dispatch({ type: "FETCH_SUCCESS", payload: true });
        } else {
          dispatch({ type: "FETCH_SUCCESS", payload: false });
        }
        break;
      default:
        break;
    }
  }, [state.tag]);

  return (
    <nav className="w-full h-16 px-5 bg-white border-b-[1px] flex items-center justify-between fixed z-50">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center cursor-pointer w-w4">
          <img
            className="w-24 mr-5"
            src="/assets/logo.svg"
            alt="kalibrr-logo"
          />
        </Link>
        {state.isLogin === false ? (
          <div className="flex md:order-2 gap-y-10 sm:gap-5 items-center">
            <Link
              to="/user/login"
              className="hidden md:block font-medium cursor-pointer"
            >
              Masuk
            </Link>
            <Link
              to="/user/register"
              className="hidden md:block font-medium cursor-pointer"
            >
              Daftar
            </Link>
            <Link
              to="/company/register"
              className="hidden font-medium bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md md:flex items-center gap-2 cursor-pointer"
            >
              Perusahaan <HiBuildingOffice />
            </Link>
            {/* Hamburger */}
            <div
              onClick={handleClick}
              className="block md:hidden z-10 duration-300"
            >
              {!nav ? <FaBars /> : <FaTimes />}
            </div>
          </div>
        ) : (
          <>
            <div
              onClick={handleClick}
              className="md:hidden z-10 duration-300 absolute right-5"
            >
              {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <div className="hidden md:flex absolute right-5">
              <HiUserCircle
                className="h-8 w-8 rounded-lg cursor-pointer"
                onClick={showMenuAccount}
              />
              {isShowMenuAccount && (
                <div className="w-52 h-fit border-[1px] absolute right-1 top-10 bg-white flex flex-col rounded-md">
                  <Link
                    to="/user/dashboard/profile"
                    className="flex items-center py-3 px-4 hover:bg-blue-50 space-x-2 cursor-pointer"
                  >
                    <HiNewspaper className="h-5" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link
                    to="/user/dashboard/setting"
                    className="flex items-center py-3 px-4 hover:bg-blue-50 space-x-2 cursor-pointer"
                  >
                    <HiCog6Tooth className="h-5" />
                    <span className="font-medium">Pengaturan Akun</span>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex items-center py-3 px-4 hover:bg-blue-50 space-x-2 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <HiArrowLeftOnRectangle className="h-5" />
                    <span className="font-medium">Keluar</span>
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
        <Link
          to="/job"
          spy={true}
          offset={50}
          smooth={true}
          duration={500}
          className="font-medium hover:cursor-pointer mr-auto hidden md:block"
        >
          Lowongan Kerja
        </Link>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute duration-300 top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center text-[#0a192f]"
          }
        >
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="/"
              smooth={true}
              duration={500}
              className="hover:cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="/job"
              smooth={true}
              duration={500}
              className="hover:cursor-pointer"
            >
              Lowongan Kerja
            </Link>
          </li>
          {state.isLogin === true ? (
            <>
              <li className="pt-20 py-6 text-4xl">
                {" "}
                <Link
                  to="/user/dashboard/profile"
                  smooth={true}
                  duration={500}
                  className="hover:cursor-pointer"
                >
                  Dashboard
                </Link>
              </li>
              <li className="py-6 text-4xl">
                {" "}
                <Link
                  onClick={handleLogout}
                  to="/"
                  smooth={true}
                  duration={500}
                  className="hover:cursor-pointer"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="pt-20 py-6 text-4xl">
                {" "}
                <Link
                  onClick={handleClick}
                  to="/user/login"
                  smooth={true}
                  duration={500}
                  className="hover:cursor-pointer"
                >
                  Masuk
                </Link>
              </li>
              <li className="py-6 text-4xl">
                {" "}
                <Link
                  onClick={handleClick}
                  to="/user/register"
                  smooth={true}
                  duration={500}
                  className="hover:cursor-pointer"
                >
                  Daftar
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
