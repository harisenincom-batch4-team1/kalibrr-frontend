import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Label, Radio } from "flowbite-react";
import { useCompanyJobContext } from "../../../context/company-job-context";
import { DefaultEditor } from "react-simple-wysiwyg";
import { companyJobApi } from "../../../api";
import { toast } from "react-toastify";
import Spinner from "../../Spinner";
import Cookies from "js-cookie";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCompanyJobContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch({ type: "SUBMIT" });
    setTimeout(() => {
      axios
        .post(
          companyJobApi,
          {
            name: data.name,
            type: data.type,
            tenure: data.tenure,
            salaryMin: data.salaryMin,
            salaryMax: data.salaryMax,
            jobDescription: state.descriptionInput,
            jobQualification: state.qualificationInput,
            status: data.status,
          },
          {
            headers: {
              Authorization: "Bearer " + Cookies.get("kalibrr-company"),
            },
          }
        )
        .then(() => {
          navigate("/company/dashboard/profile");
          setTimeout(() => {
            navigate("/company/dashboard/job");
          }, 1);
          toast.success("Berhasil menambahkan lowongan pekerjaan");
          dispatch({ type: "SUBMIT_SUCCESS" });
        })
        .catch((err) => {
          toast.error(err?.message);
          dispatch({ type: "SUBMIT_ERROR", payload: err?.message });
        });
    }, 500);
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name" value="Nama Pekerjaan" />
          <input
            {...register("name", { required: true })}
            id="name"
            name="name"
            type="text"
            sizing="md"
            placeholder="Frontend Engineer"
            autoComplete="off"
            className={
              errors.name?.type === "required"
                ? "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                : "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
            }
            disabled={state.tag === "submitting"}
          />
          <span className="-mt-1 text-xs md:text-sm text-red-600">
            {errors.name?.type === "required" && "Nama pekerjaan harus di isi"}
          </span>
        </div>
        <div>
          <Label htmlFor="type" value="Tipe Pekerjaan" />
          <input
            {...register("type", { required: true })}
            id="type"
            name="type"
            type="text"
            sizing="md"
            placeholder="Remote, Hybrid, WFO, dll"
            autoComplete="off"
            className={
              errors.type?.type === "required"
                ? "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                : "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
            }
            disabled={state.tag === "submitting"}
          />
          <span className="-mt-1 text-xs md:text-sm text-red-600">
            {errors.type?.type === "required" && "Tipe pekerjaan harus di isi"}
          </span>
        </div>
        <div>
          <Label htmlFor="tenure" value="Masa Pekerjaan" />
          <input
            {...register("tenure", { required: true })}
            id="tenure"
            name="tenure"
            type="text"
            sizing="md"
            placeholder="Paruh waktu, Magang, dll"
            autoComplete="off"
            className={
              errors.type?.type === "required"
                ? "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                : "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
            }
            disabled={state.tag === "submitting"}
          />
          <span className="-mt-1 text-xs md:text-sm text-red-600">
            {errors.tenure?.type === "required" &&
              "Masa pekerjaan harus di isi"}
          </span>
        </div>
        <div className="flex gap-2 w-full">
          <div>
            <Label htmlFor="salaryMin" value="Gaji Minimum" />
            <input
              {...register("salaryMin", { required: true })}
              id="salaryMin"
              name="salaryMin"
              type="number"
              sizing="md"
              placeholder="4000000"
              autoComplete="off"
              className={
                errors.salaryMin?.type === "required"
                  ? "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                  : "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
              }
              disabled={state.tag === "submitting"}
            />
            <span className="-mt-1 text-xs md:text-sm text-red-600">
              {errors.salaryMin?.type === "required" &&
                "Gaji minimum harus di isi"}
            </span>
          </div>
          <div>
            <Label htmlFor="salaryMax" value="Gaji Maksimum" />
            <input
              {...register("salaryMax", { required: true })}
              id="salaryMax"
              name="salaryMax"
              type="number"
              sizing="md"
              placeholder="8000000"
              autoComplete="off"
              className={
                errors.salaryMax?.type === "required"
                  ? "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                  : "mt-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
              }
              disabled={state.tag === "submitting"}
            />
            <span className="-mt-1 text-xs md:text-sm text-red-600">
              {errors.salaryMax?.type === "required" &&
                "Gaji maksimum harus di isi"}
            </span>
          </div>
        </div>
        <Label
          htmlFor="description"
          value="Deskripsi Pekerjaan"
          className="-mb-2"
        />
        <DefaultEditor
          value={state.descriptionInput}
          onChange={(e) =>
            dispatch({ type: "CHANGE_DESCRIPTION", payload: e.target.value })
          }
          disabled={state.tag === "submitting"}
        />
        <span className="-mt-2 text-xs md:text-sm text-red-600">
          {state.descriptionInput == "" && "Deskripsi pekerjaan harus di isi"}
        </span>
        <Label
          htmlFor="description"
          value="Kualifikasi Pekerjaan"
          className="-mb-2"
        />
        <DefaultEditor
          value={state.qualificationInput}
          onChange={(e) =>
            dispatch({ type: "CHANGE_QUALIFICATION", payload: e.target.value })
          }
          disabled={state.tag === "submitting"}
        />
        <span className="-mt-2 text-xs md:text-sm text-red-600">
          {state.qualificationInput == "" &&
            "Kualifikasi pekerjaan harus di isi"}
        </span>
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="salaryMax" value="Status Lowongan Kerja" />
          <div className="flex items-center gap-2">
            <Radio
              {...register("status", { required: true })}
              id="status"
              name="status"
              type="radio"
              sizing="sm"
              placeholder="8000000"
              autoComplete="off"
              className="rounded-full"
              value={1}
              disabled={state.tag === "submitting"}
            />
            <Label htmlFor="status" value="Buka" />
          </div>
          <div className="flex items-center gap-2">
            <Radio
              {...register("status", { required: true })}
              id="status"
              name="status"
              type="radio"
              sizing="sm"
              placeholder="8000000"
              autoComplete="off"
              className="rounded-full"
              value={0}
              disabled={state.tag === "submitting"}
            />
            <Label htmlFor="status" value="Tutup" />
          </div>
          <span className="text-xs md:text-sm text-red-600">
            {errors.status?.type === "required" &&
              "Status pekerjaan harus di isi"}
          </span>
        </div>
        <Button
          type="submit"
          className="my-2 sm:w-20 h-10"
          disabled={state.tag === "submitting"}
        >
          {state.tag === "submitting" ? <Spinner /> : "Kirim"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
