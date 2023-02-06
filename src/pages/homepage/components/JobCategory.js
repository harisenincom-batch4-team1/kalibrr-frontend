import React from 'react'
import { FaDesktop, FaCode, FaMoneyBillWave, FaPencilRuler } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsPeople, BsShop } from "react-icons/bs";
import { CgStack } from "react-icons/cg";

const JobCategory = () => {
  return (
    <div>
        <div className="container mx-auto mt-10 bg-[#f7f9fb] rounded-lg h-fit">
            <div className="container px-10 py-10">
                <h3 className="text-4xl font-bold ml-24">Explore jobs by category</h3>
                <p className="text-gray-600 text-xl mt-8 w-[480px] ml-24">
                Get the most exciting jobs from all around the world and grow your
                career fast with others.
            </p>
            </div>
            <div className="container grid grid-rows-2 grid-cols-4 w-fit mx-auto gap-x-32 gap-y-10 md:auto-cols-auto pb-10">
                <a href="/">
                    <div className="container bg-white py-4 pl-4 w-56 h-36 ">
                        <FaDesktop className="text-[#0086ff]" size={32}/>
                        <p className="text-xl font-bold mt-4">Digital Marketing</p>
                        <p className="text-gray-600 mt-4">xx Jobs</p>
                    </div>
                </a>
                <a href="/">
                    <div className="container bg-white py-4 pl-4 w-56 h-36 ">
                        <HiOutlinePencilAlt className="text-[#0086ff]" size={32}/>
                        <p className="text-xl font-bold mt-4">Content Writing</p>
                        <p className="text-gray-600 mt-4">xx Jobs</p>
                    </div>
                </a>
                <a href="/">
                    <div className="container bg-white py-4 pl-4 w-56 h-36 ">
                        <BsPeople className="text-[#0086ff]" size={32}/>
                        <p className="text-xl font-bold mt-4">HR Management</p>
                        <p className="text-gray-600 mt-4">xx Jobs</p>
                    </div>
                </a>
                <a href="/">
                    <div className="container bg-white py-4 pl-4 w-56 h-36 ">
                        <BsShop className="text-[#0086ff]" size={32}/>
                        <p className="text-xl font-bold mt-4">Sales</p>
                        <p className="text-gray-600 mt-4">xx Jobs</p>
                    </div>
                </a>
                <a href="/">
                    <div className="container bg-white py-4 pl-4 w-56 h-36 ">
                        <FaCode className="text-[#0086ff]" size={32}/>
                        <p className="text-xl font-bold mt-4">Development</p>
                        <p className="text-gray-600 mt-4">xx Jobs</p>
                    </div>
                </a>
                <a href="/">
                    <div className="container bg-white py-4 pl-4 w-56 h-36 ">
                        <CgStack className="text-[#0086ff]" size={32}/>
                        <p className="text-xl font-bold mt-4">UI/UX Design</p>
                        <p className="text-gray-600 mt-4">xx Jobs</p>
                    </div>
                </a>
                <a href="/">
                    <div className="container bg-white py-4 pl-4 w-56 h-36 ">
                        <FaMoneyBillWave className="text-[#0086ff]" size={32}/>
                        <p className="text-xl font-bold mt-4">Account & Finance</p>
                        <p className="text-gray-600 mt-4">xx Jobs</p>
                    </div>
                </a>
                <a href="/">
                    <div className="container bg-white py-4 pl-4 w-56 h-36 ">
                        <FaPencilRuler className="text-[#0086ff]" size={32}/>
                        <p className="text-xl font-bold mt-4">Design</p>
                        <p className="text-gray-600 mt-4">xx Jobs</p>
                    </div>
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default JobCategory