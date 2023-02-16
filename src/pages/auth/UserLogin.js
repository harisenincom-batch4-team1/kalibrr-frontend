import { useEffect } from "react";
import { useGlobalContext } from "../../context/global-context";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { userLoginApi } from "../../api";
import { useUserLoginContext } from "../../context/user-login-context";
import { Button } from "flowbite-react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import Spinner from "../../components/Spinner";
import PublicLayout from "../../layouts/PublicLayout";

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const data = useGlobalContext();
  const { state, dispatch } = useUserLoginContext();

  const togglePasswordVisibility = () => {
    state.tag !== "submitting" && state.isShowPassword
      ? dispatch({ type: "SHOW_PASSWORD", payload: false })
      : dispatch({ type: "SHOW_PASSWORD", payload: true });
  };

  const onSubmit = (data) => {
    dispatch({ type: "CHANGE_EMAIL", payload: data.email });
    dispatch({
      type: "CHANGE_PASSWORD",
      payload: data.password,
    });
    dispatch({ type: "SUBMIT" });
  };

  useEffect(() => {
    switch (state.tag) {
      case "submitting":
        axios
          .post(userLoginApi, {
            email: state.emailInput,
            password: state.passwordInput,
          })
          .then((res) => {
            dispatch({ type: "SUBMIT_SUCCESS" });
            Cookies.set("kalibrr", res.data.datas);
            setTimeout(() => {
              data.dispatch({ type: "FETCH_USER" });
              navigate("/user/dashboard/profile");
            }, 1000);
            localStorage.setItem("kalibrr", res.data.datas);
          })
          .catch((err) => {
            dispatch({ type: "SUBMIT_ERROR", payload: err?.message });
            if (err?.response?.data?.message) {
              return toast.error(err?.response?.data?.message);
            }
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
        <title>Masuk - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <div className="pt-32 lg:pt-40 pb-24 lg:pb-40 px-3 bg-zinc-100">
        <div className="max-w-[450px] h-fit items-center justify-center px-3 md:px-6 py-2 mx-auto border rounded-md border-gray-200 bg-white">
          <div className="flex flex-col gap-5">
            <h1 className="text-center text-2xl my-3 font-medium">
              Masuk ke Kalibrr
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <label className="block">Email *</label>
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
                placeholder="Email"
                autoComplete="off"
              />
              <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
                {errors.email?.type === "required" && "Email harus di isi"}
              </span>
              <div className="flex flex-row relative items-center">
                <div className="basis-full">
                  <label className="mb-2 block">Kata Sandi *</label>
                  <input
                    {...register("password", { required: true })}
                    disabled={state.tag === "submitting"}
                    className={
                      errors.password?.type === "required"
                        ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                    }
                    name="password"
                    id="password"
                    type={state.isShowPassword ? "text" : "password"}
                    placeholder="Kata Sandi"
                    autoComplete="off"
                  />
                  <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
                    {errors.password?.type === "required" &&
                      "Kata sandi harus di isi"}
                  </span>
                </div>
                <div
                  className={
                    errors.password?.type === "required"
                      ? "absolute bottom-8 right-3 opacity-50 cursor-pointer"
                      : "absolute bottom-2 right-3 opacity-50 cursor-pointer"
                  }
                >
                  {state.isShowPassword ? (
                    <FaEye size={25} onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEyeSlash size={25} onClick={togglePasswordVisibility} />
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="mt-5 h-10"
                disabled={state.tag === "submitting"}
              >
                {state.tag === "submitting" ? <Spinner /> : "Masuk"}
              </Button>
            </form>

            <div className="text-center text-xs md:text-sm mb-2">
              Belum mempunyai akun?
              <Link
                to="/user/register"
                className="text-blue-500 ml-1 hover:underline"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default UserLogin;
