import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useUserProfileContext } from "../../../context/user-profile-context";

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
      <h1 className="text-white font-semibold text-base md:text-xl bg-[#0086FF] py-3 px-4">
        Informasi Dasar
      </h1>
      <button
        onClick={handleEdit}
        className="absolute right-0 top-0 py-3 px-4 text-white font-semibold"
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
        {state.tag === "editing" && (
          <form
            onSubmit={handleSubmit}
            className="max-w-full flex flex-wrap justify-between gap-y-2 mt-5"
          >
            <input
              value={state.nameInput}
              onChange={(e) =>
                dispatch({ type: "CHANGE_NAME", payload: e.target.payload })
              }
              placeholder={"Nama"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={state.emailInput}
              onChange={(e) =>
                dispatch({ type: "CHANGE_EMAIL", payload: e.target.payload })
              }
              placeholder={"Email"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={state.phoneInput}
              onChange={(e) =>
                dispatch({ type: "CHANGE_PHONE", payload: e.target.payload })
              }
              placeholder={"Telepon"}
              type="number"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={state.locationInput}
              onChange={(e) =>
                dispatch({ type: "CHANGE_LOCATION", payload: e.target.payload })
              }
              placeholder={"Lokasi"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={state.roleInput}
              onChange={(e) =>
                dispatch({ type: "CHANGE_ROLE", payload: e.target.payload })
              }
              placeholder={"Gelar"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={state.skillInput}
              onChange={(e) =>
                dispatch({ type: "CHANGE_SKILL", payload: e.target.payload })
              }
              placeholder={"Keahlian"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="mt-2 w-full md:w-fit bg-[#0086FF] text-white font-normal md:font-medium py-2 px-5 rounded-md hover:bg-blue-400 ml-auto"
            >
              Simpan
            </button>
          </form>
        )}
        {state.tag === "loaded" && (
          <div className="mt-5 md:mt-0 flex justify-between flex-col sm:flex-row sm:w-11/12 mx-auto">
            <div className="space-y-1 w-full md:w-6/12">
              <p className="flex items-center gap-x-1">
                Nama : {state.datas.name}
              </p>
              <p className="flex items-center gap-x-1">
                Email : {state.datas.email}
              </p>
              <p className="flex items-center gap-x-1">
                Telepon : {state.datas.phone ? state.datas.phone : "-"}
              </p>
            </div>
            <div className="space-y-1  w-full md:w-6/12">
              <p className="flex items-center gap-x-1">
                Lokasi : {state.datas.location ? state.datas.location : "-"}
              </p>
              <p className="flex items-center gap-x-1">
                Gelar : {state.datas.role ? state.datas.role : "-"}
              </p>
              <p className="flex items-center gap-x-1">
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
