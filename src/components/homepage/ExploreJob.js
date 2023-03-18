import { companyStaticPhotoApi, jobsApi } from "api";
import axios from "axios";
import { HomeNewJobSkeleton } from "components/skeletons/HomeNewJobSkeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ExploreJobs = ({ status, errorMsg, datas, truncate }) => {
  return (
    <div className="mb-16">
      <div className="max-w-[1280px] mx-auto mt-16 bg-[#f7f9fb] rounded-lg h-fit flex flex-col justify-center">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center md:text-4xl  font-bold">
            Jelajahi pekerjaan terbaru
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg mx-auto text-center">
            Lihat pekerjaan unggulan dari perusahaan, atau
            <br /> Mulai melamar sekarang
          </p>
          <div className="mt-4 flex w-full justify-center">
            <Link
              to="/job"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lihat semua pekerjaan
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        {status === "error" && (
          <div className="mx-auto text-center w-full h-full">
            <p className="text-base sm:text-lg font-medium pt-10">{errorMsg}</p>
            <img
              src="/assets/error.webp"
              alt=""
              className="mx-auto -mb-5 h-72"
            />
          </div>
        )}

        <div className="w-full grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 mt-10 gap-3">
          {status === "fetching" && (
            <>
              <HomeNewJobSkeleton />
              <HomeNewJobSkeleton />
              <HomeNewJobSkeleton />
              <HomeNewJobSkeleton />
              <HomeNewJobSkeleton />
              <HomeNewJobSkeleton />
            </>
          )}
          {status === "success" &&
            datas?.map((data, i) => {
              return (
                <div className="w-full h-full p-5 bg-white border border-gray-200 rounded-lg hover:shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-row grow-0 h-full bg-white relative pb-10">
                    <div className="">
                      <img
                        src={
                          data.Company.photo ===
                          "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                            ? "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                            : companyStaticPhotoApi + data.Company.photo
                        }
                        alt=""
                        className="w-20 h-20 object-cover mr-auto rounded-lg"
                      />
                      <p className="text-xl font-bold mt-4">
                        {data.Company.name}
                      </p>
                      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                        {data.name}
                      </h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: truncate(data.jobDescription, 50),
                        }}
                        className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                      />
                    </div>
                    <Link
                      to={`/job/${data.id}`}
                      className="inline-flex w-fit absolute bottom-0 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Lebih lengkap
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
