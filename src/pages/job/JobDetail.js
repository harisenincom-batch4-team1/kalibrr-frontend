import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/global-context";
import { Helmet } from "react-helmet";
import { jobsApi } from "../../api";
import { Button } from "flowbite-react";
import axios from "axios";
import PublicLayout from "../../layouts/PublicLayout";
import rupiahFormat from "rupiah-format";
import moment from "moment";
import JobDetailSkeleton from "../../components/skeletons/JobDetailSkeleton";

const JobDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [detailJob, setDetailJob] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const { state, dispatch } = useGlobalContext();

  const handleApply = () => {
    if (state.isLogin === false) {
      return navigate("/user/login");
    }
  };

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
          <img src="/assets/error.webp" alt="" className="mx-auto -mt-20" />
        </div>
      )}
      {detailJob === null && isLoading === false && !errorMsg && (
        <p className="text-center">Lowongan pekerjaan tidak ditemukan</p>
      )}
      <div className="pt-24 max-w-[800px] mx-auto">
        {detailJob !== null && (
          <div className="px-5 relative">
            <Button
              onClick={handleApply}
              className="absolute top-40 sm:right-4 sm:top-20 py-2"
              size="sm"
              disabled={!detailJob.status}
            >
              Lamar sekarang
            </Button>
            <span
              className={
                detailJob.status == 0 &&
                "absolute top-0 right-28 bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
              }
            >
              {detailJob.status == 0 && "Close"}
            </span>
            <span className="absolute top-44 sm:top-0 right-4 bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              {moment(detailJob.updatedAt).format("MM/DD/YYYY")}
            </span>
            <div className="flex items-center gap-5 w-fit">
              <img
                src={detailJob.Company.photo}
                alt=""
                className="w-28 h-28 object-contain border p-5 rounded-md bg-white"
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
            <div className="pb-10">
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

export default JobDetail;
