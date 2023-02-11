import UserDashboardLayout from "../../layouts/DashboardLayoutUser";
import HeaderTitle from "../../components/dashboard_user/header/HeaderTitle";
import Card from "../../components/dashboard_user/application/Card";
import { useUserJobApplicationContext } from "../../context/user-job-application";
import Cookies from "js-cookie";
import { useEffect } from "react";
import axios from "axios";
import { userJobApplicationApi } from "../../api";
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
              dispatch({ type: "FETCH_SUCCESS", payload: res.data.datas });
            } else {
              dispatch({ type: "FETCH_EMPTY" });
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
      <HeaderTitle title={"Lamaran"} />
      {state.tag === "fetching" && (
        <div className="p-5 w-full h-[60%] flex justify-center items-center">
          <Spinner />
        </div>
      )}
      {state.tag === "loaded" && <Card />}
      {state.tag === "empty" && (
        <div className="p-5 w-full h-[60%] flex justify-center items-center text-center">
          Kamu belum melamar pekerjaan apapun
        </div>
      )}
      {state.tag === "error" && (
        <div className="p-5 w-full h-[60%] flex justify-center items-center">
          {state.errorMsg}
        </div>
      )}
    </UserDashboardLayout>
  );
};

export default UserDashboardApplication;
