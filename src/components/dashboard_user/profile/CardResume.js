import { useEffect, useState } from "react";
import { userGetResumeApi, userResumeApi } from "api";
import axios from "axios";
import { useGlobalContext } from "context";
import { Button } from "flowbite-react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const CardResume = () => {
  const { dispatch } = useGlobalContext();
  const [status, setStatus] = useState("idle");
  const [datas, setDatas] = useState(null);
  const [resume, setResume] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
  };

  useEffect(() => {
    switch (status) {
      case "idle":
        setStatus("fetching");
        break;
      case "fetching":
        axios(userResumeApi, {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        })
          .then((res) => {
            if (!res.data.datas.resume) {
              setStatus("empty");
            } else {
              setDatas(res.data.datas.resume);
              setStatus("success");
            }
          })
          .catch((err) => {
            setStatus("error");
            setErrorMsg(err?.message);
            toast.error(err?.message);
          });
        break;
      case "submitting":
        let formData = new FormData();
        formData.append("resume", resume);
        axios
          .put(userResumeApi, formData, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: "Bearer " + Cookies.get("kalibrr"),
            },
          })
          .then((res) => {
            setStatus("fetching");
            setResume(null);
            dispatch({ type: "FETCH_USER" });
            toast.success("Resume berhasil di simpan");
          })
          .catch((err) => {
            setStatus("error");
            if (err?.response?.data?.error) {
              return toast.error(err?.response?.data?.error);
            }
            return toast.error(err?.message);
          });
        break;
      default:
        break;
    }
  }, [status]);

  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden bg-white border-gray-200 border">
      <h1 className="text-white font-medium text-sm md:text-base bg-blue-700 py-3 px-4">
        Resume
      </h1>
      <form className="py-2 px-3 font-normal text-sm pt-4 md:px-12">
        {datas && (
          <a
            className="mb-3"
            href={userGetResumeApi + datas}
            target="_blank"
          >
            <Button>Lihat Resume</Button>
          </a>
        )}
        <label
          className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="small_size"
        >
          Unggah Resume
        </label>
        <input
          onChange={handleResumeChange}
          className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="small_size"
          type="file"
        />
        {resume && <Button onClick={handleSubmit}>Kirim Resume</Button>}
      </form>
    </div>
  );
};
