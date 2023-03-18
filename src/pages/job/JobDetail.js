import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { JobDetailSkeleton } from "components";
import { useGlobalContext } from "context";
import { PublicLayout } from "layouts";
import { Button } from "flowbite-react";
import { Helmet } from "react-helmet";
import { applyJobApi, companyStaticPhotoApi, jobsApi } from "api";
import axios from "axios";
import moment from "moment";
import rupiahFormat from "rupiah-format";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { ModalApply } from "components/ModalApply";

export const JobDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [detailJob, setDetailJob] = useState(null);
  const [isApplied, setIsApplied] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { state, dispatch } = useGlobalContext();

  const truncate = (text, number) => {
    if (text.length > number) {
      return text.slice(0, number) + "...";
    }
    return text;
  };

  useEffect(() => {
    axios(jobsApi + "/" + id)
      .then((res) => {
        setDetailJob(res.data.datas);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err?.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <PublicLayout>
      <Helmet>
        <title>Lowongan Kerja - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      {isLoading && <JobDetailSkeleton />}
      {errorMsg && (
        <div className="mx-auto text-center w-fit mt-40">
          <p className="text-base sm:text-lg font-medium">{errorMsg}</p>
          <img src="/assets/error.webp" alt="" className="mx-auto -mt-10" />
        </div>
      )}
      {detailJob === null && isLoading === false && !errorMsg && (
        <p className="text-center">Lowongan pekerjaan tidak ditemukan</p>
      )}
      <div className="pt-24 max-w-[800px] mx-auto">
        {detailJob !== null && (
          <div className="px-5 relative">
            <ModalApply
              userId={state.datas.id}
              jobId={id}
              detailJob={detailJob.status}
            />
            {/* <Button
              onClick={handleApply}
              className="absolute top-40 sm:right-4 sm:top-20 py-2"
              size="sm"
              disabled={!detailJob.status || state.isLoginCompany}
            >
              Lamar sekarang
            </Button> */}
            <span
              className={
                detailJob.status == 0 &&
                "absolute top-0 right-4 sm:right-28 bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
              }
            >
              {detailJob.status == 0 && "Close"}
            </span>
            <span className="absolute top-44 sm:top-0 right-4 bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              {moment(detailJob.updatedAt).format("MM/DD/YYYY")}
            </span>
            <div className="flex items-center gap-5 w-fit">
              <img
                src={
                  detailJob.Company.photo ===
                  "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                    ? "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                    : companyStaticPhotoApi + detailJob.Company.photo
                }
                alt=""
                className="w-28 h-28 object-cover border rounded-md bg-white"
              />
              <div className="">
                <h1 className="font-semibold text-xl sm:hidden">
                  {truncate(detailJob.name, 15)}
                </h1>
                <h1 className="font-semibold text-xl hidden sm:block">
                  {truncate(detailJob.name)}
                </h1>
                <div className="sm:mb-4 font-semibold flex items-center w-fit mb-10">
                  <span className="hover:underline cursor-pointer ">
                    {detailJob.Company.name}
                  </span>{" "}
                  -{" "}
                  <span className="cursor-default no-underline">
                    {detailJob.Company.location}
                  </span>
                </div>
                <div className="absolute top-32 left-5 sm:static">
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ">
                    {rupiahFormat.convert(detailJob.salaryMin)}
                  </span>
                  {" - "}
                  <span className="bg-green-100 text-green-800 text-xs font-medium ml-1 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    {rupiahFormat.convert(detailJob.salaryMax)}
                  </span>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-green-300">
                  {detailJob.tenure}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {detailJob.type}
                </span>
              </div>
            </div>
            <hr className="mt-24 sm:my-5" />
            <div className="pb-10 w-[350px] sm:w-[600px] md:w-[720px] overflow-hidden overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-full">
              <h1 className="mb-2 mt-5 text-lg font-semibold">Deskripsi</h1>
              <div
                dangerouslySetInnerHTML={{ __html: detailJob.jobDescription }}
                className="text-sm sm:text-base"
              />
              <h1 className="mb-2 mt-5 text-lg font-semibold">Kualifikasi</h1>
              <div
                dangerouslySetInnerHTML={{ __html: detailJob.jobQualification }}
                className="text-sm sm:text-base"
              />
            </div>
          </div>
        )}
      </div>
    </PublicLayout>
  );
};
