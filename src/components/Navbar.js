import { Link } from "react-router-dom";
import { HiBuildingOffice } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="w-full h-16 px-5 py-2 bg-white border-b-[1px] flex items-center justify-between fixed z-10">
      <div className="w-96 flex items-center gap-5">
        <Link to="/" className="w-24">
          <img className="w-24" src="/assets/logo.svg" alt="kalibrr-logo" />
        </Link>
        <Link className="text-sm font-medium mt-1" to="/job">
          <p>Lowongan Kerja</p>
        </Link>
      </div>
      <div className="flex items-center gap-5 text-sm font-medium">
        <Link to="/user/login">Masuk</Link>
        <Link to="/user/register">Daftar</Link>
        <Link
          to="/company/register"
          className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md flex items-center gap-2"
        >
          Perusahaan <HiBuildingOffice />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
