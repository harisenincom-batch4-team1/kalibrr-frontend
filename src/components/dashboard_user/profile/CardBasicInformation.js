import { userPhotoApi } from "api";
import { useUserProfileContext } from "context";
import { Button } from "flowbite-react";
import { Spinner } from "components";
import { AiFillEdit } from "react-icons/ai";

export const CardBasicInformation = () => {
  const { state, dispatch } = useUserProfileContext();

  const handleEdit = () => {
    if (state.tag === "loaded") {
      dispatch({ type: "EDIT" });
    }
    if (state.tag === "editing") {
      dispatch({ type: "CANCEL_EDIT" });
    }
  };

  const handlePhotoChange = (e) => {
    dispatch({ type: "CHANGE_PHOTO", payload: e.target.files[0] });
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
          {state.photoPreview ? (
            <img
              src={state.photoPreview}
              className="rounded-full w-full h-full object-cover"
              alt="profile"
            />
          ) : (
            <img
              src={state.datas.photo || userPhotoApi + state.datas.photo}
              className="rounded-full w-full h-full object-cover"
              alt="profile"
            />
          )}
        </div>

        {state.tag === "editing" ||
        state.tag === "submitting" ||
        state.tag === "submitting_photo" ? (
          <>
            {state.photo ? (
              <>
                <input
                  onChange={handlePhotoChange}
                  type="file"
                  className="-mt-5 bg-gray-400 rounded-full w-10 h-fit absolute left-12 opacity-0 z-10 top-28 sm:left-16 sm:top-28 md:left-24 md:top-36"
                  placeholder="Ganti foto"
                  name="Ganti foto"
                />
                <AiFillEdit className=" bg-gray-200 cursor-pointer -mt-5 rounded-full w-6 p-1 h-fit absolute left-14 top-32 sm:left-20 sm:top-32 md:left-28 md:top-40" />
                <Button
                  onClick={() => dispatch({ type: "SUBMIT_PHOTO" })}
                  className="w-fit ml-8"
                >
                  Ganti foto
                </Button>
              </>
            ) : (
              <>
                <input
                  onChange={handlePhotoChange}
                  type="file"
                  className="-mt-5 bg-gray-400 rounded-full w-10 h-fit absolute left-12 opacity-0 z-10 top-28 sm:left-16 sm:top-28 md:left-24 md:top-36"
                  placeholder="Ganti foto"
                  name="Ganti foto"
                />
                <AiFillEdit className=" bg-gray-200 cursor-pointer -mt-5 rounded-full w-6 p-1 h-fit absolute left-14 top-32 sm:left-20 sm:top-32 md:left-28 md:top-40" />
              </>
            )}
            <form
              onSubmit={handleSubmit}
              className="max-w-full flex flex-wrap justify-between gap-y-2 mt-5 relative"
            >
              <div className="w-full sm:w-[49%]">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama
                </label>
                <input
                  required
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
                  required
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
                  required
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
                  required
                  value={state.phoneInput}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_PHONE",
                      payload: e.target.value,
                    })
                  }
                  placeholder={
                    !state.datas.phone ? "0823XXXXXXX" : state.datas.phone
                  }
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
                  required
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
                  required
                  value={state.skillInput}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_SKILL",
                      payload: e.target.value,
                    })
                  }
                  placeholder={
                    !state.datas.skill
                      ? "React, TypeScript, etc"
                      : state.datas.skill
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
          </>
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
