import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsPeople, BsShop } from "react-icons/bs";
import { CgStack } from "react-icons/cg";
import {
  FaDesktop,
  FaCode,
  FaMoneyBillWave,
  FaPencilRuler,
} from "react-icons/fa";

export const JobCategory = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="mt-16 md:mt-20 bg-[#f7f9fb] rounded-lg h-fit flex flex-col justify-center">
        <div className="container text-center mx-auto mb-8">
          <h3 className="md:text-4xl text-2xl font-bold text-center">
            Jelajahi pekerjaan berdasarkan kategori
          </h3>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg mt-4 mx-auto text-center">
            Dapatkan pekerjaan paling menarik dari seluruh dunia dan kembangkan
            karirmu dengan cepat bersama orang lain.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto pb-10">
          <div className=" bg-white border flex flex-col justify-between py-4 pl-4 min-w-1/2 sm:min-w-4/12 lg:min-w-3/12 h-32 rounded-lg hover:shadow transition cursor-pointer">
            <FaDesktop className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-3">Digital Marketing</p>
            <p className="text-gray-600 text-sm">34 Pekerjaan</p>
          </div>
          <div className=" bg-white border flex flex-col justify-between py-4 pl-4 min-w-1/2 sm:min-w-4/12 lg:min-w-3/12 h-32 rounded-lg hover:shadow transition cursor-pointer">
            <FaCode className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Developer</p>
            <p className="text-gray-600 text-sm">134 Pekerjaan</p>
          </div>
          <div className=" bg-white border flex flex-col justify-between py-4 pl-4 min-w-1/2 sm:min-w-4/12 lg:min-w-3/12 h-32 rounded-lg hover:shadow transition cursor-pointer">
            <FaMoneyBillWave className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Finance</p>
            <p className="text-gray-600 text-sm">68 Pekerjaan</p>
          </div>
          <div className=" bg-white border flex flex-col justify-between py-4 pl-4 min-w-1/2 sm:min-w-4/12 lg:min-w-3/12 h-32 rounded-lg hover:shadow transition cursor-pointer">
            <FaPencilRuler className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Graphic Designer</p>
            <p className="text-gray-600 text-sm">93 Pekerjaan</p>
          </div>
          <div className=" bg-white border flex flex-col justify-between py-4 pl-4 min-w-1/2 sm:min-w-4/12 lg:min-w-3/12 h-32 rounded-lg hover:shadow transition cursor-pointer">
            <HiOutlinePencilAlt className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Content Writer</p>
            <p className="text-gray-600 text-sm">56 Pekerjaan</p>
          </div>
          <div className=" bg-white border flex flex-col justify-between py-4 pl-4 min-w-1/2 sm:min-w-4/12 lg:min-w-3/12 h-32 rounded-lg hover:shadow transition cursor-pointer">
            <BsPeople className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">HR Management</p>
            <p className="text-gray-600 text-sm">33 Pekerjaan</p>
          </div>
          <div className=" bg-white border flex flex-col justify-between py-4 pl-4 min-w-1/2 sm:min-w-4/12 lg:min-w-3/12 h-32 rounded-lg hover:shadow transition cursor-pointer">
            <BsShop className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">Sales</p>
            <p className="text-gray-600 text-sm">61 Pekerjaan</p>
          </div>
          <div className=" bg-white border flex flex-col justify-between py-4 pl-4 min-w-1/2 sm:min-w-4/12 lg:min-w-3/12 h-32 rounded-lg hover:shadow transition cursor-pointer">
            <CgStack className="text-[#0086ff]" size={32} />
            <p className="text-base font-bold mt-2">UI/UX Designer</p>
            <p className="text-gray-600 text-sm ">73 Pekerjaan</p>
          </div>
        </div>
      </div>
    </div>
  );
};
