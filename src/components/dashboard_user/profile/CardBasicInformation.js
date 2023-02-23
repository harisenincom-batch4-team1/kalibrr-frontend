import { useUserProfileContext } from "../../../context/user-profile-context";
import { Button } from "flowbite-react";
import Spinner from "../../Spinner";

const CardBasicInformation = () => {
  const { state, dispatch } = useUserProfileContext();

  const handleEdit = () => {
    state.nameInput = state.datas.name;
    state.emailInput = state.datas.email;
    state.phoneInput = state.datas.phone;
    state.roleInput = state.datas.role;
    state.locationInput = state.datas.location;
    state.skillInput = state.datas.skill;
    if (state.tag === "loaded") {
      dispatch({ type: "EDIT" });
    }
    if (state.tag === "editing") {
      dispatch({ type: "CANCEL_EDIT" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };

  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-gray-200 border relative">
      <h1 className="text-white font-medium text-sm md:text-base bg-blue-600 py-3 px-4">
        Informasi Dasar
      </h1>
      <button
        onClick={handleEdit}
        className="absolute right-0 top-0 py-3 px-4 text-white font-medium text-sm md:text-base"
      >
        {state.tag === "editing" ? "Batal" : "Edit"}
      </button>
      <div className="bg-white py-3 px-4 md:flex md:flex-col gap-5">
        <div className="rounded-full w-16 h-16 md:w-24 md:h-24 overflow-hidden sm:ml-6 mt-2">
          <img
            src={state.datas.photo}
            className="rounded-full w-full"
            alt="profile"
          />
        </div>
        {state.tag === "editing" || state.tag === "submitting" ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-full flex flex-wrap justify-between gap-y-2 mt-5"
          >
            <div className="w-full sm:w-[49%]">
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama
              </label>
              <input
                value={state.nameInput}
                onChange={(e) =>
                  dispatch({ type: "CHANGE_NAME", payload: e.target.value })
                }
                placeholder={
                  !state.datas.name ? "Budi Setiawan" : state.datas.name
                }
                type="text"
                id="small-input"
                autoComplete="off"
                className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-full sm:w-[49%]">
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={state.emailInput}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_EMAIL",
                    payload: e.target.value,
                  })
                }
                placeholder={
                  !state.datas.email
                    ? "budisetiawan@gmail.com"
                    : state.datas.email
                }
                type="text"
                id="small-input"
                autoComplete="off"
                className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-full sm:w-[49%]">
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Lokasi
              </label>
              <input
                value={state.locationInput}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_LOCATION",
                    payload: e.target.value,
                  })
                }
                placeholder={
                  !state.datas.location ? "Surabaya" : state.datas.location
                }
                type="text"
                id="small-input"
                autoComplete="off"
                className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-full sm:w-[49%]">
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Telepon
              </label>
              <input
                value={state.phoneInput}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_PHONE",
                    payload: e.target.value,
                  })
                }
                placeholder={!state.datas.phone ? "0823XXXXXXX" : state.datas.phone}
                type="number"
                id="small-input"
                autoComplete="off"
                className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-full sm:w-[49%]">
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gelar
              </label>
              <input
                value={state.roleInput}
                onChange={(e) =>
                  dispatch({ type: "CHANGE_ROLE", payload: e.target.value })
                }
                placeholder={
                  !state.datas.role ? "Frontend Engineer" : state.datas.role
                }
                type="text"
                id="small-input"
                autoComplete="off"
                className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-full sm:w-[49%]">
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Keahlian
              </label>
              <input
                value={state.skillInput}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_SKILL",
                    payload: e.target.value,
                  })
                }
                placeholder={
                  !state.datas.skill ? "React, TypeScript, etc" : state.datas.skill
                }
                type="text"
                id="small-input"
                autoComplete="off"
                className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <Button
              type="submit"
              className="ml-auto mt-2 w-full md:w-24 h-10"
              disabled={state.tag === "submitting"}
            >
              {state.tag === "submitting" ? <Spinner /> : "Simpan"}
            </Button>
          </form>
        ) : (
          <></>
        )}
        {state.tag === "loaded" && (
          <div className="mt-5 md:mt-0 flex justify-between flex-col sm:flex-row sm:w-11/12 mx-auto">
            <div className="space-y-1 w-full md:w-6/12">
              <p className="flex items-center gap-x-1 text-sm md:text-base">
                Nama : {state.datas.name}
              </p>
              <p className="flex items-center gap-x-1 text-sm md:text-base">
                Email : {state.datas.email}
              </p>
              <p className="flex items-center gap-x-1 text-sm md:text-base">
                Telepon : {state.datas.phone ? state.datas.phone : "-"}
              </p>
            </div>
            <div className="space-y-1 pt-1 md:pt-0 w-full md:w-6/12 text-sm md:text-base">
              <p className="flex items-center gap-x-1">
                Lokasi : {state.datas.location ? state.datas.location : "-"}
              </p>
              <p className="flex items-center gap-x-1 text-sm md:text-base">
                Gelar : {state.datas.role ? state.datas.role : "-"}
              </p>
              <p className="flex items-center gap-x-1 text-sm md:text-base">
                Keahlian : {state.datas.skill ? state.datas.skill : "-"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardBasicInformation;
