import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const CardBasicInformation = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    axios
      .put(
        process.env.REACT_APP_USER,
        {},
        {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        }
      )
      .then(() => {
        setIsEdit(false);
        setIsSubmit(false);
      })
      .catch((err) => {
        setIsSubmit(false);
      });
  };

  const handleIsEdit = (e) => {
    if (e.target.textContent === "Edit") {
      // dispatch({ type: "EDIT_USER" });
    } else {
      // dispatch({ type: "CANCEL_EDIT_USER" });
    }
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-gray-200 border relative">
      <h1 className="text-white font-semibold text-base md:text-xl bg-[#0086FF] py-3 px-4">
        Informasi Dasar
      </h1>
      <button
        onClick={handleIsEdit}
        className="absolute right-0 top-0 py-3 px-4 text-white font-semibold"
      >
        {isEdit ? "Batal" : "Edit"}
      </button>
      <div className="bg-white py-3 px-4 md:flex md:flex-col gap-5">
        <div className="rounded-full w-16 h-16 md:w-24 md:h-24 overflow-hidden sm:ml-6 mt-2">
          <img
            className="rounded-full w-full"
            alt="profile"
          />
        </div>
        {isEdit ? (
          <form
            onSubmit={handleUpdate}
            className="max-w-full flex flex-wrap justify-between gap-y-2 mt-5"
          >
            <input
              placeholder={"Nama"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              placeholder={"Lokasi"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              placeholder={"Telepon"}
              type="number"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              placeholder={"Gelar"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              placeholder={"Keahlian"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              placeholder={"Tautan Linkedin"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <button
              type="submit"
              className="mt-2 w-full md:w-fit bg-[#0086FF] text-white font-normal md:font-medium py-2 px-5 rounded-md hover:bg-blue-400 ml-auto"
            >
              Simpan
            </button>
          </form>
        ) : (
          <div className="mt-5 md:mt-0 flex justify-between flex-col sm:flex-row sm:w-11/12 mx-auto">
            <div className="space-y-1 w-full md:w-6/12">
              <p className="flex items-center gap-x-1">
                <span>Nama : </span>
                <span className="font-normal text-sm md:text-lg">
                  Budi
                </span>
              </p>
              <p className="flex items-center gap-x-1">
                <span>Lokasi : </span>
                <span className="font-normal text-sm md:text-lg">
                  Surabaya
                </span>
              </p>
              <p className="flex items-center gap-x-1">
                <span>Telepon : </span>
                <span className="font-normal text-sm md:text-lg">
                  98298402
                </span>
              </p>
            </div>
            <div className="space-y-1  w-full md:w-6/12">
              <p className="flex items-center gap-x-1">
                <span>Gelar : </span>
                <span className="font-normal text-sm md:text-lg">
                  Frontend
                </span>
              </p>
              <p className="flex items-center gap-x-1">
                <span>Keahlian : </span>
                <span className="font-normal text-sm md:text-lg">
                  TypeScript
                </span>
              </p>
              <p className="flex items-center gap-x-1">
                <span>Tautan LinkedIn : </span>
                <span className="font-normal text-sm md:text-lg">
                  Gak ada
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardBasicInformation;
