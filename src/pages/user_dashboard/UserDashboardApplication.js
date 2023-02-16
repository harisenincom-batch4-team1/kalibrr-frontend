import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { userJobApplicationApi } from "../../api";
import { useUserJobApplicationContext } from "../../context/user-job-application";
import axios from "axios";
import UserDashboardLayout from "../../layouts/DashboardLayoutUser";
import HeaderTitle from "../../components/dashboard_user/header/HeaderTitle";
import Card from "../../components/dashboard_user/application/Card";
import Cookies from "js-cookie";
import Spinner from "../../components/Spinner";

const UserDashboardApplication = () => {
  const { state, dispatch } = useUserJobApplicationContext();

  useEffect(() => {
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH" });
        break;
      case "fetching":
        axios(userJobApplicationApi, {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        })
          .then((res) => {
            if (res.data.datas === 0) {
              dispatch({ type: "FETCH_EMPTY" });
            } else {
              dispatch({ type: "FETCH_SUCCESS", payload: res.data.datas });
            }
          })
          .catch((err) =>
            dispatch({ type: "FETCH_ERROR", payload: err?.message })
          );
        break;
      default:
        break;
    }
  }, [state.tag]);

  return (
    <UserDashboardLayout>
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
        <div className="px-5">
          <Card />
        </div>
      )}
      {state.tag === "empty" && (
        <div className="p-5 w-full h-[60%] flex justify-center items-center text-center">
          Kamu belum melamar pekerjaan apapun
        </div>
      )}
      {state.tag === "error" && (
        <div className="p-5 w-full h-[60%] flex justify-center items-center text-center">
          {state.errorMsg}
        </div>
      )}
    </UserDashboardLayout>
  );
};

export default UserDashboardApplication;
