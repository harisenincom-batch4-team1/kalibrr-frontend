import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useJobListContext } from "../../context/joblist-context";
import { jobsApi } from "../../api";
import Search from "../../components/Search";
import axios from "axios";
import JobCard from "../../components/JobCard";
import Pagination from "../../components/Pagination";
import PublicLayout from "../../layouts/PublicLayout";

const JobList = () => {
  const { state, dispatch } = useJobListContext();

  useEffect(() => {
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH" });
        break;
      case "fetching":
        axios(jobsApi + "?search=" + state.inputValue)
          .then((res) =>
            dispatch({ type: "FETCH_SUCCESS", payload: res.data.datas.result })
          )
          .catch((err) =>
            dispatch({ type: "FETCH_ERROR", payload: err?.message })
          );
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
      <div className="max-w-[900px] mx-auto flex flex-wrap justify-evenly gap-y-5 pt-36 md:pt-44 px-5">
        <JobCard />
      </div>
      <Pagination />
    </PublicLayout>
  );
};

export default JobList;
