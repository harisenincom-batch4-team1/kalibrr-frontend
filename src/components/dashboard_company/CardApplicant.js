import {
  companyUserApplyApi,
  userGetResumeApi,
  userPhotoApi,
  userResumeApi,
} from "api";
import axios from "axios";
import { Button, Dropdown, Spinner } from "flowbite-react";
import Cookies from "js-cookie";
import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CardApplicant = () => {
  const [datas, setDatas] = useState([]);
  const [id, setId] = useState(0);
  const [applyStatus, setApplyStatus] = useState("");
  const [status, setStatus] = useState("fetching");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (value, id) => {
    setStatus("submitting");
    setId(id);
    setApplyStatus(value);
  };

  useEffect(() => {
    switch (status) {
      case "fetching":
        axios(companyUserApplyApi, {
          headers: {
            Authorization: "Bearer " + Cookies.get("kalibrr-company"),
          },
        })
          .then((res) => {
            if (res.data.datas.length === 0) {
              return setStatus("empty");
            }
            setStatus("success");
            setDatas(res.data.datas);
          })
          .catch((err) => {
            setErrorMsg(err?.message);
            setStatus("error");
          });
        break;
      case "submitting":
        axios
          .put(
            companyUserApplyApi + "/" + id,
            { status: applyStatus },
            {
              headers: {
                Authorization: "Bearer " + Cookies.get("kalibrr-company"),
              },
            }
          )
          .then(() => {
            setStatus("fetching");
            toast.success("Berhasil mengubah status pelamar");
          })
          .catch((err) => {
            toast.error(err?.message);
            setStatus("error", err?.message);
          });
        break;
      default:
        break;
    }
  }, [status]);

  return (
    <div className="max-w-[800px] mx-auto mt-5 px-5 gap-4">
      {status === "empty" && (
        <div className="px-5">
          <p className="mx-auto text-center mt-20 text-sm sm:text-base md:text-xl font-medium">
            Belum ada pengguna yang melamar
          </p>
          <img src="/assets/empty-user-apply.png" className="mx-auto" />
        </div>
      )}
      {status === "error" && (
        <div className="mx-auto text-center w-fit mt-20">
          <p className="text-base sm:text-lg font-medium">{errorMsg}</p>
          <img src="/assets/error.webp" alt="" className="mx-auto -mt-10" />
        </div>
      )}
      {status === "fetching" && (
        <div className="mt-5 w-full h-96 flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      )}
      {datas.map((data, i) => {
        return (
          <div className="bg-white hover:shadow cursor-pointer flex border flex-col md:flex-row items-center w-full justify-between rounded-md p-5 gap-3">
            <div className="flex items-center gap-2">
              <img
                src={
                  data.JobApplications[i].User.photo ===
                  "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    ? "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    : userPhotoApi + data.JobApplications[i].User.photo
                }
                className="w-12 h-12 mb-10"
              />
              <div>
                <p className="font-semibold">
                  {data.JobApplications[i].User.name}
                </p>
                <p className="text-sm">{data.JobApplications[i].User.email}</p>
                <p className="text-sm mt-2">
                  Pekerjaan yang dilamar <br /> {data.name} -{" "}
                  {moment(data.createdAt).format("MM/DD/YYYY")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={userGetResumeApi + data.JobApplications[i].User.resume}
                target="_blank"
              >
                <Button color={"gray"}>Lihat resume</Button>
              </a>
              <Dropdown
                label={data.JobApplications[i].status}
                color={
                  data.JobApplications[i].status === "rejected"
                    ? "failure"
                    : "gray"
                }
              >
                <Dropdown.Item
                  onClick={() =>
                    handleSubmit("onreview", data.JobApplications[i].id)
                  }
                >
                  Onreview
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    handleSubmit("selected", data.JobApplications[i].id)
                  }
                >
                  Selected
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    handleSubmit("interview", data.JobApplications[i].id)
                  }
                >
                  Interview
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    handleSubmit("test", data.JobApplications[i].id)
                  }
                >
                  Test
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    handleSubmit("offering", data.JobApplications[i].id)
                  }
                >
                  Offering
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    handleSubmit("recruited", data.JobApplications[i].id)
                  }
                >
                  Recruited
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    handleSubmit("rejected", data.JobApplications[i].id)
                  }
                >
                  Rejected
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        );
      })}
    </div>
  );
};
