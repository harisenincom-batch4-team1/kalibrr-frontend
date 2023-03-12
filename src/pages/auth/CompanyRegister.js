import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { DefaultEditor } from "react-simple-wysiwyg";
import { companyOtpApi, companyOtpApiCheck, companyRegisterApi } from "api";
import { useGlobalContext, useCompanyRegisterContext } from "context";
import { ConfirmCompanyRegister } from "components";
import { Otp, Spinner, Stepper } from "components";
import { PublicLayout } from "layouts";
import axios from "axios";
import Cookies from "js-cookie";

export const CompanyRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dataGlobalContext = useGlobalContext();
  const { state, dispatch } = useCompanyRegisterContext();

  const onSubmit = (data) => {
    dispatch({ type: "CHANGE_NAME", payload: data.name });
    dispatch({ type: "CHANGE_EMAIL", payload: data.email });
    dispatch({ type: "CHANGE_PASSWORD", payload: data.password });
    dispatch({ type: "CHANGE_PHONE", payload: data.phone });
    dispatch({ type: "CHANGE_LOCATION", payload: data.location });
    dispatch({ type: "CHANGE_DESCRIPTION", payload: data.description });
    dispatch({ type: "NEXT" });
  };

  useEffect(() => {
    switch (state.tag) {
      case "gettingotp":
        axios
          .post(companyOtpApi, {
            name: state.nameInput,
            email: state.emailInput,
            password: state.passwordInput,
            location: state.locationInput,
            phone: state.phoneInput,
          })
          .then(() => {
            dispatch({ type: "GET_OTP_SUCCESS" });
          })
          .catch((err) => {
            dispatch({ type: "GET_OTP_ERROR", payload: err?.message });
            if (err?.response?.data?.message) {
              return toast.error(err?.response?.data?.message);
            }
            return toast.error(err?.message);
          });
        break;
      case "checkingotp":
        axios
          .post(companyOtpApiCheck, {
            email: state.emailInput,
            otp: state.otp,
          })
          .then(() => {
            dispatch({ type: "CHECK_OTP_SUCCESS" });
          })
          .catch((err) => {
            dispatch({
              type: "CHECK_OTP_ERROR",
              payload: err?.response?.data?.message,
            });
            if (!err?.response?.data?.message) {
              return toast.error(err?.message);
            }
          });
        break;
      case "confirming":
        axios
          .post(companyRegisterApi, {
            name: state.nameInput,
            email: state.emailInput,
            location: state.locationInput,
            phone: state.phoneInput,
            password: state.passwordInput,
            // passwordConfirm: state.passwordConfirmInput,
          })
          .then((res) => {
            Cookies.set("kalibrr-company", res.data.datas);
            setTimeout(() => {
              dataGlobalContext.dispatch({ type: "FETCH_COMPANY" });
              navigate("/company/dashboard/profile");
            }, 500);
          })
          .catch((err) => {
            dispatch({ type: "CONFIRM_ERROR", payload: err?.message });
            return toast.error(err?.message);
          });
        break;
      default:
        break;
    }
  }, [state.tag]);

  return (
    <PublicLayout>
      <Helmet>
        <title>Daftar sebagai Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <div
        className="bg-cover px-2"
        style={{ backgroundImage: `url("/assets/bgSignup.webp")` }}
      >
        <div className="pt-28 pb-12">
          <div className="max-w-[850px] px-5 md:px-10 mx-auto border rounded-lg bg-white py-10">
            <Stepper />
            {state.tag === "idle" ||
            state.tag === "error" ||
            state.tag === "gettingotp" ? (
              <>
                <div className="mx-auto mb-10">
                  <h1 className="mt-10 text-center font-semibold text-3xl md:text-5xl">
                    Hai Rekruiter!
                  </h1>
                  <p className="text-center text-gray-500 text-sm md:text-base max-w-[650px] mx-auto mt-2 md:mt-6 px-2 md:px-0">
                    Kami ingin mengetahui lebih banyak tentang Anda dan
                    perusahaan Anda sehingga kami dapat menyelesaikan kebutuhan
                    perekrutan Anda bersama-sama.
                  </p>
                </div>
                <div className="">
                  <p className="font-semibold text-2xl my-5">Informasi Dasar</p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 mx-auto"
                    id="form"
                  >
                    <div>
                      <label className="block mb-1" htmlFor="name">
                        Nama Perusahaan *
                      </label>
                      <input
                        {...register("name", { required: true })}
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Nama Perusahaan"
                        disabled={state.tag === "submitting"}
                        autoComplete="off"
                        className={
                          errors.name?.type === "required"
                            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                        }
                      />
                      <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
                        {errors.name?.type === "required" &&
                          "Nama perusahaan harus di isi"}
                      </span>
                    </div>

                    <div>
                      <label className="block mb-1" htmlFor="email">
                        Email Perusahaan *
                      </label>
                      <input
                        {...register("email", { required: true })}
                        disabled={state.tag === "submitting"}
                        className={
                          errors.email?.type === "required"
                            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                        }
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email Perusahaan"
                        autoComplete="off"
                      />
                      <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
                        {errors.email?.type === "required" &&
                          "Email perusahaan harus di isi"}
                      </span>
                    </div>

                    <div>
                      <label className="block mb-1" htmlFor="phone">
                        Telepon Perusahaan *
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        disabled={state.tag === "submitting"}
                        className={
                          errors.email?.type === "required"
                            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                        }
                        name="phone"
                        id="phone"
                        type="number"
                        placeholder="0334 XXXXXXX"
                        autoComplete="off"
                      />
                      <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
                        {errors.email?.type === "required" &&
                          "Telepon perusahaan harus di isi"}
                      </span>
                    </div>

                    <div>
                      <label className="block mb-1" htmlFor="location">
                        Lokasi Perusahaan *
                      </label>
                      <input
                        {...register("location", { required: true })}
                        disabled={state.tag === "submitting"}
                        className={
                          errors.location?.type === "required"
                            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                        }
                        name="location"
                        id="location"
                        type="text"
                        placeholder="Surabaya"
                        autoComplete="off"
                      />
                      <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
                        {errors.location?.type === "required" &&
                          "Lokasi perusahaan harus di isi"}
                      </span>
                    </div>

                    {/* <div>
                      <label className="block mb-1" htmlFor="description">
                        Deskripsi Perusahaan *
                      </label>
                      <DefaultEditor
                        value={state.descriptionInput}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_DESCRIPTION",
                            payload: e.target.value,
                          })
                        }
                        disabled={state.tag === "submitting"}
                      />
                      <span className="-mt-2 text-xs md:text-sm text-red-600">
                        {state.descriptionInput == "" &&
                          "Deskripsi perusahaan harus di isi"}
                      </span>
                    </div> */}

                    <div className="flex my-2 gap-2 items-center">
                      <input
                        {...register("agree", { required: true })}
                        disabled={state.tag === "submitting"}
                        id="agree"
                        name="agree"
                        type="checkbox"
                        className={
                          errors.agree?.type === "required"
                            ? "focus:ring-red-500 rounded-full"
                            : "rounded-full"
                        }
                      />
                      <label htmlFor="agree" className="text-xs md:text-sm">
                        Saya menyetujui syarat dan ketentuan Kalibrr
                      </label>
                    </div>
                    <div className="flex justify-center justify-items-center items-center w-full">
                      <Button
                        type="submit"
                        className="h-10 w-full"
                        disabled={state.tag === "gettingotp"}
                      >
                        {state.tag === "gettingotp" ? <Spinner /> : "Daftar"}
                      </Button>
                    </div>

                    <div className="text-center text-sm mt-10">
                      <span>
                        Sudah mempunyai akun perusahaan?
                        <Link
                          to="/company/login"
                          className="text-blue-500 ml-1 hover:underline"
                        >
                          Masuk
                        </Link>
                      </span>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <></>
            )}
            {state.tag === "onotp" || state.tag === "checkingotp" ? (
              <Otp />
            ) : (
              <></>
            )}
            {state.tag === "confirm" || state.tag === "confirming" ? (
              <ConfirmCompanyRegister />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};
