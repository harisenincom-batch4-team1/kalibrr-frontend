import { useEffect, useState } from "react";
import { companyJobApi } from "../../api";
import axios from "axios";
import Cookies from "js-cookie";
import Container from "./layouts/Container";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import HeaderTitle from "./components/header/HeaderTitle";
import Form from "./components/job/Form";
import Table from "./components/job/Table";
import Spinner from "../../components/Spinner";

const CompanyDashboardJob = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    setIsLoading(true);
    axios
      .delete(companyJobApi + "/" + id, {
        headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      });
  };

  useEffect(() => {
    axios(companyJobApi, {
      headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
    }).then((res) => {
      setIsLoading(false);
      setJobs(res.data.datas);
    });
  }, [isLoading]);

  return (
    <NavbarUserLayout>
      <Container>
        <HeaderTitle title={"Lowongan Kerja"} />
        <Form />
        {isLoading && (
          <div className="p-5 w-full h-[60%] flex justify-center items-center">
            <Spinner />
          </div>
        )}
        {!isLoading && <Table deleteFn={handleDelete} jobs={jobs} />}
      </Container>
    </NavbarUserLayout>
  );
};

export default CompanyDashboardJob;
