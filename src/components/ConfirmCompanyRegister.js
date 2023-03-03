import { useCompanyRegisterContext, useGlobalContext } from "context";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { Spinner } from "components";

export const ConfirmCompanyRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dataGlobalContext = useGlobalContext();
  const { state, dispatch } = useCompanyRegisterContext();

  const togglePasswordVisibility = (id) => {
    switch (id) {
      case "new":
        state.tag !== "confirming" && state.isShowPassword
          ? dispatch({ type: "SHOW_PASSWORD", payload: false })
          : dispatch({ type: "SHOW_PASSWORD", payload: true });
        break;
      case "confirm":
        state.tag !== "confirming" && state.isShowPasswordConfirm
          ? dispatch({ type: "SHOW_PASSWORD_CONFIRM", payload: false })
          : dispatch({ type: "SHOW_PASSWORD_CONFIRM", payload: true });
        break;
      default:
        break;
    }
  };

  const onSubmit = (data) => {
    dispatch({ type: "CHANGE_PASSWORD", payload: data.password });
    dispatch({ type: "CHANGE_PASSWORD_CONFIRM", payload: data.confirm });
    dispatch({ type: "CONFIRM" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mx-auto space-y-5"
    >
      <h1 className="my-5 mt-10 text-center font-semibold text-3xl">
        Konfirmasi Kata Sandi
      </h1>

      <div className="flex flex-row relative items-center">
        <div className="basis-full">
          <label className="mb-2 block">Kata Sandi *</label>
          <input
            {...register("password", { required: true })}
            disabled={state.tag === "confirming"}
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
            {errors.password?.type === "required" && "Kata sandi harus di isi"}
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
            <FaEye size={25} onClick={() => togglePasswordVisibility("new")} />
          ) : (
            <FaEyeSlash
              size={25}
              onClick={() => togglePasswordVisibility("new")}
            />
          )}
        </div>
      </div>

      <div className="flex flex-row relative items-center">
        <div className="basis-full">
          <label className="mb-2 block">Konfirmasi Kata Sandi *</label>
          <input
            {...register("confirm", { required: true })}
            disabled={state.tag === "confirming"}
            className={
              errors.confirm?.type === "required"
                ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-50"
                : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
            }
            name="confirm"
            id="confirm"
            type={state.isShowPasswordConfirm ? "text" : "password"}
            placeholder="Kata Sandi"
            autoComplete="off"
          />
          <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600">
            {errors.confirm?.type === "required" &&
              "Konfirmasi kata sandi harus di isi"}
          </span>
        </div>
        <div
          className={
            errors.confirm?.type === "required"
              ? "absolute bottom-8 right-3 opacity-50 cursor-pointer"
              : "absolute bottom-2 right-3 opacity-50 cursor-pointer"
          }
        >
          {state.isShowPasswordConfirm ? (
            <FaEye
              size={25}
              onClick={() => togglePasswordVisibility("confirm")}
            />
          ) : (
            <FaEyeSlash
              size={25}
              onClick={() => togglePasswordVisibility("confirm")}
            />
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="mt-5 h-10"
        disabled={state.tag === "confirming"}
      >
        {state.tag === "confirming" ? <Spinner /> : "Konfirmasi"}
      </Button>
    </form>
  );
};
