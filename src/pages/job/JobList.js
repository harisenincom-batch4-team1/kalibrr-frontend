import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useJobListContext } from "../../context/joblist-context";
import { jobsApi } from "../../api";
import { Pagination } from "flowbite-react";
import Search from "../../components/Search";
import axios from "axios";
import JobCard from "../../components/JobCard";
import PublicLayout from "../../layouts/PublicLayout";
import JobCardSkeleton from "../../components/skeletons/JobCardSkeleton";

const JobList = () => {
  const { state, dispatch } = useJobListContext();

  useEffect(() => {
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH", payload: 0 });
        break;
      case "fetching":
        axios(jobsApi + "?search=" + state.inputValue + "&page=" + state.page)
          .then((res) => {
            if (res?.data?.datas?.result?.length === 0) {
              dispatch({ type: "FETCH_EMPTY" });
            } else {
              dispatch({
                type: "FETCH_SUCCESS",
                payload: res.data.datas,
              });
            }
          })
          .catch((err) => {
            dispatch({ type: "FETCH_ERROR", payload: err?.message });
          });
        break;
      default:
        break;
    }
  }, [state.tag]);

  return (
    <PublicLayout>
      <Helmet>
        <title>Lowongan Kerja - Kalibrr</title>
      </Helmet>
      <Search />
      <div className="px-5 min-h-[70vh]">
        <div className="max-w-[800px] mx-auto flex flex-wrap justify-between pt-36 md:pt-44 gap-2 md:gap-3 md:gap-y-4">
          {state.tag === "fetching" && <JobCardSkeleton />}
          {state.tag === "loaded" && <JobCard />}
          {state.tag === "error" && (
            <div className="mx-auto text-center w-fit mt-20">
              <p className="text-base sm:text-lg font-medium">
                {state.errorMsg}
              </p>
              <img src="/assets/error.webp" alt="" className="mx-auto -mt-10" />
            </div>
          )}
          {state.tag === "empty" && (
            <>
              <p className="text-center text-sm font-medium sm:text-lg mx-auto mt-5 sm:mt-10">
                Maaf, Lowongan pekerjaan tidak ditemukan
              </p>
              <img src="/assets/empty.webp" className="mx-auto" />
            </>
          )}
        </div>
      </div>
      <div className="px-5 flex justify-center overflow-hidden overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-full">
        {state?.datas?.totalPage > 1 && (
          <Pagination
            className="mx-auto my-8 flex w-fit"
            currentPage={state?.page + 1 || 1}
            onPageChange={(e) => dispatch({ type: "FETCH", payload: -1 + e })}
            showIcons={false}
            nextLabel="Next"
            previousLabel="Prev"
            totalPages={
              state.datas.totalPage === undefined ? 0 : state?.datas?.totalPage
            }
          />
        )}
      </div>
      <div className="my-10" />
    </PublicLayout>
  );
};

export default JobList;
