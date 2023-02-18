import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { companyJobApi } from "../../api";
import { useCompanyJobContext } from "../../context/company-job-context";
import { Spinner, Tabs } from "flowbite-react";
import DashboardLayoutCompany from "../../layouts/DashboardLayoutCompany";
import axios from "axios";
import Cookies from "js-cookie";
import Form from "../../components/dashboard_company/job/Form";
import Table from "../../components/dashboard_company/job/Table";

const CompanyDashboardJob = () => {
  const { state, dispatch } = useCompanyJobContext();

  useEffect(() => {
    switch (state.tag) {
      case "idle":
        dispatch({ type: "FETCH" });
        break;
      case "fetching":
        axios(companyJobApi, {
          headers: {
            Authorization: "Bearer " + Cookies.get("kalibrr-company"),
          },
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
            headers: {
              Authorization: "Bearer " + Cookies.get("kalibrr-company"),
            },
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

  console.log(state.tag);

  return (
    <DashboardLayoutCompany>
      <Helmet>
        <title>Lowongan Kerja Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <Tabs.Group aria-label="Full with tabs" style="underline">
        <Tabs.Item active={true} title="Daftar">
          {state.tag === "fetching" && (
            <div className="p-5 pt-32 w-full h-[100%] flex justify-center items-center">
              <Spinner />
            </div>
          )}
          {state.tag === "empty" && (
            <p>Perusahaan belum menambahkan pekerjaan</p>
          )}
          {state.tag === "error" && <p>{state.errorMsg}</p>}
        </Tabs.Item>
        <Tabs.Item title="Tambah">
          {state.tag === "fetching" && (
            <div className="p-5 pt-32 w-full h-[100%] flex justify-center items-center">
              <Spinner />
            </div>
          )}
          {state.tag === "empty" && (
            <p>Perusahaan belum menambahkan pekerjaan</p>
          )}
          {state.tag === "error" && <p>{state.errorMsg}</p>}
          {state.tag === "loaded" && <Form />}
        </Tabs.Item>
        <Tabs.Item title="Edit">
          {state.tag === "fetching" && (
            <div className="p-5 pt-32 w-full h-[100%] flex justify-center items-center">
              <Spinner />
            </div>
          )}
          {state.tag === "empty" && (
            <p>Perusahaan belum menambahkan pekerjaan</p>
          )}
          {state.tag === "error" && <p>{state.errorMsg}</p>}
          {state.tag === "loaded" && <Table />}
        </Tabs.Item>
      </Tabs.Group>
    </DashboardLayoutCompany>
  );
};

export default CompanyDashboardJob;
