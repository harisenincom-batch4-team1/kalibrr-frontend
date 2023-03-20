import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { applyJobApi, userJobApplicationApi } from "api";
import { DashboardLayoutUser } from "layouts";
import { useUserJobApplicationContext } from "context";
import { HeaderTitle, Card } from "components/dashboard_user";
import { Spinner } from "components";
import Cookies from "js-cookie";
import axios from "axios";

export const UserDashboardApplication = () => {
  const { state, dispatch } = useUserJobApplicationContext();

  useEffect(() => {
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH" });
        break;
      case "fetching":
        axios(applyJobApi, {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        })
          .then((res) => {
            if (res.data.datas.length === 0) {
              dispatch({ type: "FETCH_EMPTY" });
            } else {
              dispatch({ type: "FETCH_SUCCESS", payload: res.data.datas });
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
    <DashboardLayoutUser>
      <Helmet>
        <title>Lamaran Pengguna - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitle title={"Lamaran"} />
      {state.tag === "fetching" && (
        <div className="p-5 w-full h-[60%] flex justify-center items-center">
          <Spinner />
        </div>
      )}
      {state.tag === "loaded" && (
        <div className="max-w-full h-[95%] sm:pb-16 mx-auto gap-2 pr-16 sm:pr-0 rounded-lg overflow-hidden overflow-y-scroll overflow-x-scroll scrollbar-hide">
          <div className="px-5 rounded-lg overflow-hidden">
            <Card />
          </div>
        </div>
      )}
      {state.tag === "empty" && (
        <div className="px-10">
          <p className="mx-auto text-center mt-20 text-sm sm:text-base md:text-xl font-medium">
            Kamu belum melamar pekerjaan apapun
          </p>
          <img
            src="/assets/empty-job-applications.webp"
            className="mx-auto -mt-10"
          />
        </div>
      )}
      {state.tag === "error" && (
        <p className="mx-auto text-center mt-20 text-sm sm:text-base md:text-xl font-medium">
          {state.errorMsg}
        </p>
      )}
    </DashboardLayoutUser>
  );
};
