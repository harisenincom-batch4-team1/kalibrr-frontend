import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import DropdownNavbar from "./NavbarDropdown";
import axios from "axios";
import { userProfileApi } from "../api";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();
  const [isShowMenuAccount, setIsShowMenuAccount] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const showMenuAccount = () => {
    setIsShowMenuAccount((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    Cookies.remove("kalibrr");
  };

  useEffect(() => {
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH" });
        break;
      case "fetching":
        if (Cookies.get("kalibrr") !== undefined) {
          dispatch({ type: "FETCH_SUCCESS", payload: { isLogin: true } });
          dispatch({ type: "FETCH_USER" });
        } else {
          dispatch({ type: "FETCH_SUCCESS", payload: { isLogin: false } });
        }
        break;
      case "fetching_user":
        axios(userProfileApi, {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        })
          .then((res) =>
            dispatch({
              type: "FETCH_USER_SUCCESS",
              payload: { datas: res.data.datas },
            })
          )
          .catch((err) => {
            navigate("/");
            toast.error(err?.message);
          });
        break;
      default:
        break;
    }
  }, [state.tag]);

  return (
    <nav className="w-full h-16 px-5 bg-white border-b-[1px] flex items-center justify-between fixed z-20">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            className="w-24 mr-5"
            src="/assets/logo.svg"
            alt="kalibrr-logo"
          />
        </Link>
        <Link
          to="/job"
          className="items-center cursor-pointer mr-auto font-medium hidden md:block"
        >
          Lowongan Kerja
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
              className="block md:hidden z-10 duration-300 cursor-pointer"
            >
              {!nav ? <FaBars /> : <FaTimes />}
            </div>
          </div>
        ) : (
          <DropdownNavbar />
        )}

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute duration-300 top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center text-[#0a192f]"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/" className="hover:cursor-pointer">
              Halaman utama
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="/job"
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
                  className="hover:cursor-pointer"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="py-6 text-4xl border-t-[1px] w-full text-center">
                {" "}
                <Link
                  onClick={handleClick}
                  to="/user/login"
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
                  className="hover:cursor-pointer"
                >
                  Daftar
                </Link>
              </li>
              <li className="py-6 text-4xl border-t-[1px]  w-full text-center">
                {" "}
                <Link
                  onClick={handleClick}
                  to="/company/register"
                  className="hover:cursor-pointer"
                >
                  Perusahaan
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
