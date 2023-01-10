import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import NavbarUserLayout from "./components/NavbarUserLayout";
import SkeletonCard from "./components/SkeletonCard";

const DashboardSaved = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedJobList, setSavedJobList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_JOB)
      .then((res) => {
        setSavedJobList(res.data[0].datas);
        setIsLoading(false);
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
            <div className="w-full px-5 mx-auto ">
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
          <div className="space-y-3 w-full lg:w-5/12 overflow-y-scroll overflow-hidden pt-6 scrollbar-hide pb-5">
            {isLoading ? (
              <SkeletonCard />
            ) : (
              savedJobList.map((data, i) => {
                console.log(data);
                return (
                  <div key={i} className="bg-white border-[1px] rounded-md p-5">
                    <div className="flex items-center space-x-5">
                      <div className="w-20">
                        <img
                          src={data.companyDetail.companyLogo}
                          className="w-auto h-10 mx-auto"
                          alt="company-logo"
                        />
                      </div>
                      <div>
                        <h1>{data.title}</h1>
                        <h2>{data.companyDetail.companyName}</h2>
                        <h4>{data.companyDetail.companyLocation}</h4>
                      </div>
                    </div>
                    <p>Deskripsi: {data.jobDescription}</p>
                    <p>Salary: {data.salaryMin}</p>
                    <p>Tipe: {data.jobType}</p>
                  </div>
                );
              })
            )}
          </div>
          <div className="w-7/12 h-[95%] hidden lg:block pt-3 px-5 overflow-hidden overflow-y-scroll scrollbar-hide">
            <div className="bg-white w-full h-full border-[1px] rounded-lg"></div>
          </div>
        </div>
      </div>
    </NavbarUserLayout>
  );
};

export default DashboardSaved;
