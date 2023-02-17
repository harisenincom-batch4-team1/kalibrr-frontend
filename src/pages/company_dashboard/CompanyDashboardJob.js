import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { companyJobApi } from "../../api";
import { useCompanyJobContext } from "../../context/company-job-context";
import { Spinner } from "flowbite-react";
import axios from "axios";
import Cookies from "js-cookie";
import Form from "../../components/dashboard_company/job/Form";
import Table from "../../components/dashboard_company/job/Table";
import NavbarUserLayout from "../../layouts/DashboardLayoutCompany";
import HeaderTitle from "../../components/dashboard_company/header/HeaderTitle";

const CompanyDashboardJob = () => {
  const { state, dispatch } = useCompanyJobContext();

  useEffect(() => {
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH" });
        break;
      case "fetching":
        axios(companyJobApi, {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        })
          .then((res) => {
            dispatch({ type: "FETCH_SUCCESS", payload: res.data.datas });
          })
          .catch((err) =>
            dispatch({ type: "FETCH_ERROR", payload: err?.message })
          );
        break;
      case "deleting":
        axios
          .delete(companyJobApi + "/" + state.id, {
            headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
          })
          .then(() => {
            dispatch({ type: "DELETE_SUCCESS" });
          })
          .catch((err) =>
            dispatch({ type: "DELETE_ERROR", payload: err?.message })
          );
        break;
      default:
        break;
    }
  }, [state.tag]);

  return (
    <NavbarUserLayout>
      <Helmet>
        <title>Pekerjaan Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <HeaderTitle title={"Lowongan Kerja"} />
      <Form />
      {state.tag === "fetching" && (
        <div className="p-5 w-full h-[60%] flex justify-center items-center">
          <Spinner />
        </div>
      )}
      {state.tag === "empty" && <p>Perusahaan belum menambahkan pekerjaan</p>}
      {state.tag === "error" && <p>{state.errorMsg}</p>}
      {state.tag === "loaded" && <Table />}
    </NavbarUserLayout>
  );
};

export default CompanyDashboardJob;
