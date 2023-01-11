import { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  BriefcaseIcon,
  MapPinIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import convertRupiah from "rupiah-format";
import NavbarUserLayout from "./components/NavbarUserLayout";
import SkeletonCard from "./components/SkeletonCard";
import SkeletonJobDetail from "./components/SkeletonJobDetail";

const DashboardSaved = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDetail, setIsLoadingDetail] = useState(true);
  const [savedJobList, setSavedJobList] = useState([]);
  const [savedJobListDetail, setSavedJobListDetail] = useState({});
  const [jobDescription, setJobDescription] = useState([]);
  const [jobQualification, setJobQualification] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_JOB)
      .then((res) => {
        setSavedJobList(res.data[0].datas);
        setIsLoading(false);
      })
      .catch((err) => console.log(err?.message));
  }, []);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_JOB + "/1")
      .then((res) => {
        setSavedJobListDetail(res.data[0].datas);
        setJobDescription(res.data[0].datas.jobDescription);
        setJobQualification(res.data[0].datas.jobQualification);
        setIsLoadingDetail(false);
      })
      .catch((err) => console.log(err?.message));
  }, []);

  return (
    <NavbarUserLayout>
      <div className="w-full">
        <div className="w-full flex justify-center bg-[#fafafa]">
          <div className="w-full h-fit border-b-[1px] flex items-center py-3 md:py-0 md:px-5">
            <h1 className="text-3xl font-bold py-5 hidden md:block w-64">
              Disimpan
            </h1>
            <div className="w-full px-5 md:px-0 mx-auto ">
              <div className="w-full bg-[#edf2f7] flex justify-between rounded-full rouded-full overflow-hidden">
                <input
                  type="text"
                  className="w-full bg-[#edf2f7] py-3 px-5 outline-none"
                  placeholder="Cari Pekerjaan yang Disimpan"
                />
                <MagnifyingGlassIcon className="w-6 mr-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa] w-full flex space-x-5 h-screen px-5 space-y-3 overflow-y-scroll scrollbar-hide overflow-hidden pb-36">
          <div className="space-y-5 w-full lg:w-5/12 overflow-y-scroll overflow-hidden pt-6 scrollbar-hide pb-5">
            {isLoading ? (
              <SkeletonCard />
            ) : (
              savedJobList.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="bg-white border-[1px] rounded-md p-3 md:p-5 relative cursor-pointer hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="h-8 w-8 md:h-12 md:w-12 flex items-center justify-center">
                        <img
                          src={data.companyDetail.companyLogo}
                          className="w-full h-auto rounded-sm"
                          alt="company-logo"
                        />
                      </div>
                      <div className="flex w-full justify-between">
                        <div>
                          <h1 className="text-sm md:text-xl font-medium">
                            {data.title}
                          </h1>
                          <h2 className="text-blue-500 text-sm md:text-lg font-normal md:text-medium">
                            {data.companyDetail.companyName}
                          </h2>
                        </div>
                        <div className="">
                          <BookmarkIcon className="h-6 w-6 rounded-lg hover:text-slate-700 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm md:text-base">
                      <div className="flex items-center space-x-2">
                        <MapPinIcon className="h-5" />
                        <span className="">
                          {data.companyDetail.companyLocation}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BanknotesIcon className="h-5" />
                        <span className=""> {data.salaryMin}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BriefcaseIcon className="h-5" />
                        <span className="">{data.jobType}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="w-7/12 h-[95%] hidden lg:block pt-3 overflow-hidden overflow-y-scroll scrollbar-hide">
            <div className="bg-white relative w-full h-full border-[1px] rounded-lg py-5 px-8 overflow-y-scroll overflow-hidden scrollbar-hide">
              {isLoadingDetail || isLoading ? (
                <SkeletonJobDetail />
              ) : (
                isLoading === false && (
                  <div>
                    <div className="w-full flex items-center h-24">
                      <img
                        src={savedJobListDetail?.companyDetail?.companyLogo}
                        alt="company logo"
                        className="h-24 w-auto p-2 mr-5"
                      />
                      <div className="flex flex-col h-full">
                        <h1 className="font-bold text-3xl">
                          {savedJobListDetail.title}
                        </h1>
                        <h2 className="font-semibold text-xl text-blue-500">
                          {savedJobListDetail?.companyDetail?.companyName}
                        </h2>
                        <h4 className="font-medium text-base text-slate-800">
                          {savedJobListDetail?.companyDetail?.companyLocation}
                        </h4>
                      </div>
                    </div>
                    <div className="mt-10">
                      <p className="text-xl font-semibold">
                        {convertRupiah.convert(savedJobListDetail?.salaryMin)} -{" "}
                        {convertRupiah.convert(savedJobListDetail?.salaryMax)}
                      </p>
                      <p className="text-xl font-semibold">
                        {savedJobListDetail?.jobTenure}
                      </p>
                    </div>
                    <div className="py-5 border-b-[1px] flex items-center justify-between">
                      <button className="bg-[#0086FF] text-white py-3 px-5 font-medium text-lg rounded-lg active:scale-[99%]">
                        Lamar Sekarang
                      </button>
                      <BookmarkIcon className="h-12 w-12 rounded-lg hover:text-slate-700 cursor-pointer active:scale-[99%]" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold my-3">
                        Deskripsi Pekerjaan
                      </h1>
                      {jobDescription.map((data, i) => {
                        return <li key={i}>{data}</li>;
                      })}
                      <h1 className="text-2xl font-bold my-3 pt-2">
                        Kualifikasi Minimum
                      </h1>
                      {jobQualification.map((data, i) => {
                        return <li key={i}>{data}</li>;
                      })}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </NavbarUserLayout>
  );
};

export default DashboardSaved;
