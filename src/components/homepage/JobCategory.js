import React from "react";
import {
  FaDesktop,
  FaCode,
  FaMoneyBillWave,
  FaPencilRuler,
} from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsPeople, BsShop } from "react-icons/bs";
import { CgStack } from "react-icons/cg";

const JobCategory = () => {
  return (
    <div>
      <div className="container mx-auto mt-10 bg-[#f7f9fb] rounded-lg h-fit flex flex-col justify-center">
        <div className="container px-10 py-10 text-center mx-auto">
          <h3 className="md:text-4xl text-2xl font-bold text-center">
            Jelajahi pekerjaan berdasarkan kategori
          </h3>
          <p className="text-gray-600 text-md md:text-xl mt-4 mx-auto text-center">
          Dapatkan pekerjaan paling menarik dari seluruh dunia dan kembangkan karirmu dengan cepat bersama orang lain.
          </p>
        </div>
        <div className="max-w-[1200px] flex flex-wrap px-5 w-fit mx-auto gap-10 justify-center pb-10">
          <div className="container bg-white py-4 pl-4 w-40 md:w-56 h-fit">
            <FaDesktop className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Digital Marketing</p>
            <p className="text-gray-600 mt-2">34 Pekerjaan</p>
          </div>
          <div className="container bg-white py-4 pl-4 w-40 md:w-56 h-fit">
            <FaCode className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Developer</p>
            <p className="text-gray-600 mt-2">134 Pekerjaan</p>
          </div>
          <div className="container bg-white py-4 pl-4 w-40 md:w-56 h-fit">
            <FaMoneyBillWave className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Account & Finance</p>
            <p className="text-gray-600 mt-2">68 Pekerjaan</p>
          </div>
          <div className="container bg-white py-4 pl-4 w-40 md:w-56 h-fit">
            <FaPencilRuler className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Graphic Designer</p>
            <p className="text-gray-600 mt-2">93 Pekerjaan</p>
          </div>
          <div className="container bg-white py-4 pl-4 w-40 md:w-56 h-fit">
            <HiOutlinePencilAlt className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Content Writer</p>
            <p className="text-gray-600 mt-2">56 Pekerjaan</p>
          </div>
          <div className="container bg-white py-4 pl-4 w-40 md:w-56 h-fit">
            <BsPeople className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">HR Management</p>
            <p className="text-gray-600 mt-2">33 Pekerjaan</p>
          </div>
          <div className="container bg-white py-4 pl-4 w-40 md:w-56 h-fit">
            <BsShop className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Sales</p>
            <p className="text-gray-600 mt-2">61 Pekerjaan</p>
          </div>
          <div className="container bg-white py-4 pl-4 w-40 md:w-56 h-fit">
            <CgStack className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">UI/UX Designer</p>
            <p className="text-gray-600 mt-2">73 Pekerjaan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
