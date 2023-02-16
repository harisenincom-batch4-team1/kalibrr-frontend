import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jobsApi } from "../../api";
import { Spinner } from "flowbite-react";
import axios from "axios";
import PublicLayout from "../../layouts/PublicLayout";
import rupiahFormat from "rupiah-format";
import { useGlobalContext } from "../../context/global-context";

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

  console.log(state);

  return (
    <PublicLayout>
      <div className="pt-24 w-[800px] mx-auto">
        {!errorMsg && <p className="text-center">{errorMsg}</p>}
        {isLoading && <Spinner />}
        {detailJob !== null && (
          <div className="px-5">
            <div className="flex items-center gap-5 w-full">
              <img
                src={detailJob.Company.photo}
                alt=""
                className="w-28 border p-5 rounded-md"
              />
              <div className="text-xl">
                <h1 className="font-semibold">
                  {detailJob.Company.name} - {detailJob.name}
                </h1>
                <p className="text-sm mb-5 mt-2">
                  {rupiahFormat.convert(detailJob.salaryMin)} -{" "}
                  {rupiahFormat.convert(detailJob.salaryMax)}
                </p>
                <button
                  onClick={handleApply}
                  className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg active:scale-[99%] text-sm"
                >
                  Lamar sekarang
                </button>
              </div>
            </div>
            <hr className="my-5" />
            <div className="pb-10">
              <h1 className="mb-2 mt-5 text-lg font-semibold">
                Job Descrition
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: detailJob.jobDescription }}
              />
              <h1 className="mb-2 mt-5 text-lg font-semibold">
                Job Qualification
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: detailJob.jobQualification }}
              />
            </div>
          </div>
        )}
        {detailJob === null && isLoading === false && (
          <p className="text-center">Lowongan pekerjaan tidak ditemukan</p>
        )}
      </div>
    </PublicLayout>
  );
};

export default JobDetail;
