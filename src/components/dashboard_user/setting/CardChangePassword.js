import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { userPasswordApi } from "api";
import { useUserSettingContext } from "context";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Spinner } from "components";
import Cookies from "js-cookie";
import axios from "axios";

export const CardChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state, dispatch } = useUserSettingContext();

  const togglePasswordVisibility = (id) => {
    switch (id) {
      case "current": {
        state.tag !== "submitting" && state.isShowPasswordCurrent
          ? dispatch({ type: "SHOW_PASSWORD_CURRENT", payload: false })
          : dispatch({ type: "SHOW_PASSWORD_CURRENT", payload: true });
        break;
      }
      case "new": {
        state.tag !== "submitting" && state.isShowPasswordNew
          ? dispatch({ type: "SHOW_PASSWORD_NEW", payload: false })
          : dispatch({ type: "SHOW_PASSWORD_NEW", payload: true });
        break;
      }
      case "confirm": {
        state.tag !== "submitting" && state.isShowPasswordConfirm
          ? dispatch({ type: "SHOW_PASSWORD_CONFIRM", payload: false })
          : dispatch({ type: "SHOW_PASSWORD_CONFIRM", payload: true });
        break;
      }
      default:
        break;
    }
  };

  const onSubmit = (data) => {
    dispatch({ type: "CHANGE_CURRENT_PASSWORD", payload: data.current });
    dispatch({ type: "CHANGE_NEW_PASSWORD", payload: data.new });
    dispatch({ type: "CHANGE_CONFIRM_PASSWORD", payload: data.confirm });
    dispatch({ type: "SUBMIT" });
  };

  useEffect(() => {
    switch (state.tag) {
      case "submitting": {
        axios
          .put(
            userPasswordApi,
            {
              currentPassword: state.currentPasswordInput,
              newPassword: state.newPasswordInput,
              confirmPassword: state.confirmPasswordInput,
            },
            {
              headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
            }
          )
          .then(() => {
            toast.success("Kata sandi berhasil di perbaharui");
            dispatch({ type: "SUBMIT_SUCCESS" });
          })
          .catch((err) => {
            toast.error(
              err?.response?.data?.message
                ? err?.response?.data?.message
                : err?.message
            );
            dispatch({ type: "SUBMIT_ERROR", payload: err?.message });
          });
        break;
      }
      default:
        break;
    }
  }, [state.tag]);

  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border border-gray-200">
      <h1 className="text-white font-medium text-sm md:text-base bg-blue-600 py-3 px-4">
        Ubah Kata Sandi
      </h1>
      <div className="bg-white px-4 md:flex gap-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 pb-5 md:mt-0 w-full"
        >
          <p className="text-sm font-medium border-b-[1px] py-4">
            Untuk mengubah kata sandi anda, mohon lengkapi data berikut.
          </p>
          <div className="w-full pb-4 space-y-2 border-b-[1px]">
            <div className="w-full border-b-[1px] pb-5 relative">
              <label
                htmlFor="currentPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kata sandi sekarang *
              </label>
              <input
                {...register("current", { required: true })}
                disabled={state.tag === "submitting"}
                value={state.currentPasswordInput}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_CURRENT_PASSWORD",
                    payload: e.target.value,
                  })
                }
                name="current"
                id="currentPassword"
                type={state.isShowPasswordCurrent ? "text" : "password"}
                autoComplete="off"
                className={
                  errors.current?.type === "required"
                    ? "bg-gray-50 border h-8 md:h-10  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                    : "bg-gray-50 border h-8 md:h-10  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                }
              />
              <div
                className={
                  errors.current?.type === "required"
                    ? "absolute bottom-[50px] md:bottom-[54px] right-3 opacity-50 cursor-pointer"
                    : "absolute bottom-[26px] md:bottom-[30px] right-3 opacity-50 cursor-pointer"
                }
              >
                {state.isShowPasswordCurrent ? (
                  <FaEye
                    size={20}
                    onClick={() => togglePasswordVisibility("current")}
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    onClick={() => togglePasswordVisibility("current")}
                  />
                )}
              </div>
              <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
                {errors.current?.type === "required" &&
                  "Kata sandi sekarang harus di isi"}
              </span>
            </div>
            <div className="w-full relative">
              <label
                htmlFor="newPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kata sandi baru *
              </label>
              <input
                {...register("new", { required: true })}
                disabled={state.tag === "submitting"}
                value={state.newPasswordInput}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_NEW_PASSWORD",
                    payload: e.target.value,
                  })
                }
                name="new"
                id="newPassword"
                type={state.isShowPasswordNew ? "text" : "password"}
                autoComplete="off"
                className={
                  errors.new?.type === "required"
                    ? "bg-gray-50 border h-8 md:h-10  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                    : "bg-gray-50 border h-8 md:h-10  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                }
              />
              <div
                className={
                  errors.new?.type === "required"
                    ? "absolute bottom-[31px] md:bottom-[35px] right-3 opacity-50 cursor-pointer"
                    : "absolute bottom-[7px] md:bottom-[11px] right-3 opacity-50 cursor-pointer"
                }
              >
                {state.isShowPasswordNew ? (
                  <FaEye
                    size={20}
                    onClick={() => togglePasswordVisibility("new")}
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    onClick={() => togglePasswordVisibility("new")}
                  />
                )}
              </div>
              <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
                {errors.new?.type === "required" &&
                  "Kata sandi baru harus di isi"}
              </span>
            </div>
            <div className="w-full relative">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Konfirmasi kata sandi baru *
              </label>
              <input
                {...register("confirm", { required: true })}
                disabled={state.tag === "submitting"}
                value={state.confirmPasswordInput}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_CONFIRM_PASSWORD",
                    payload: e.target.value,
                  })
                }
                name="confirm"
                id="confirmPassword"
                type={state.isShowPasswordConfirm ? "text" : "password"}
                autoComplete="off"
                className={
                  errors.confirm?.type === "required"
                    ? "bg-gray-50 border h-8 md:h-10  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                    : "bg-gray-50 border h-8 md:h-10  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                }
              />
              <div
                className={
                  errors.confirm?.type === "required"
                    ? "absolute bottom-[31px] md:bottom-[35px] right-3 opacity-50 cursor-pointer"
                    : "absolute bottom-[7px] md:bottom-[11px] right-3 opacity-50 cursor-pointer"
                }
              >
                {state.isShowPasswordConfirm ? (
                  <FaEye
                    size={20}
                    onClick={() => togglePasswordVisibility("confirm")}
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    onClick={() => togglePasswordVisibility("confirm")}
                  />
                )}
              </div>
              <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
                {errors.confirm?.type === "required" &&
                  "Konfirmasi kata sandi harus di isi"}
              </span>
            </div>
          </div>
          <Button type="submit" className="ml-auto w-full md:w-20 h-10">
            {state.tag === "submitting" ? <Spinner /> : "Simpan"}
          </Button>
        </form>
      </div>
    </div>
  );
};
