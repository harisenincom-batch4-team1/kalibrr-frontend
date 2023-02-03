import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

const CardBasicInformation = () => {
  const dispatch = useDispatch();

  const tag = useSelector((state) => state.user.tag);
  const userDetail = useSelector((state) => state.user.user);
  const name = useSelector((state) => state.user.nameInput);
  const location = useSelector((state) => state.user.locationInput);
  const phone = useSelector((state) => state.user.phoneInput);
  const role = useSelector((state) => state.user.roleInput);
  const skill = useSelector((state) => state.user.skillInput);
  const linkedinUrl = useSelector((state) => state.user.linkedinUrlInput);

  const [isEdit, setIsEdit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [progress, setProgress] = useState(100);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setProgress(30);
    axios
      .put(
        process.env.REACT_APP_USER,
        { name, linkedinUrl, location, phone, role, skill },
        {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        }
      )
      .then(() => {
        setIsEdit(false);
        setIsSubmit(false);
        setProgress(100);
      })
      .catch((err) => {
        dispatch({ type: "FETCH_USER_ERROR", payload: err.message });
        setIsSubmit(false);
        setProgress(100);
      });
  };

  const handleIsEdit = (e) => {
    if (e.target.textContent === "Edit") {
      dispatch({ type: "EDIT_USER" });
    } else {
      dispatch({ type: "CANCEL_EDIT_USER" });
    }
    setIsEdit((prev) => !prev);
  };

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
    axios
      .get(process.env.REACT_APP_USER, {
        headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
      })
      .then((res) => {
        dispatch({ type: "FETCH_USER_SUCCESS", payload: res.data.datas });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_USER_ERROR", payload: err.message });
      });
  }, [isSubmit]);

  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-[1px] hover:shadow relative">
      <LoadingBar color="#0086FF" height={"4px"} progress={progress} />
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
            src={userDetail.photo}
            alt="profile"
          />
        </div>
        {isEdit ? (
          <form
            onSubmit={handleUpdate}
            className="max-w-full flex flex-wrap justify-between gap-y-2 mt-5"
          >
            <input
              value={name}
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_INPUT_NAME",
                  payload: e.target.value,
                });
              }}
              placeholder={"Nama"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={location}
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_INPUT_LOCATION",
                  payload: e.target.value,
                })
              }
              placeholder={"Lokasi"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={phone}
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_INPUT_PHONE",
                  payload: e.target.value,
                });
              }}
              placeholder={"Telepon"}
              type="number"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={role}
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_INPUT_ROLE",
                  payload: e.target.value,
                });
              }}
              placeholder={"Gelar"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={skill}
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_INPUT_SKILL",
                  payload: e.target.value,
                });
              }}
              placeholder={"Keahlian"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={linkedinUrl}
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_INPUT_LINKEDINURL",
                  payload: e.target.value,
                });
              }}
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
                  {userDetail?.name}
                </span>
              </p>
              <p className="flex items-center gap-x-1">
                <span>Lokasi : </span>
                <span className="font-normal text-sm md:text-lg">
                  {userDetail.location}
                </span>
              </p>
              <p className="flex items-center gap-x-1">
                <span>Telepon : </span>
                <span className="font-normal text-sm md:text-lg">
                  {userDetail.phone}
                </span>
              </p>
            </div>
            <div className="space-y-1  w-full md:w-6/12">
              <p className="flex items-center gap-x-1">
                <span>Gelar : </span>
                <span className="font-normal text-sm md:text-lg">
                  {userDetail.role}
                </span>
              </p>
              <p className="flex items-center gap-x-1">
                <span>Keahlian : </span>
                <span className="font-normal text-sm md:text-lg">
                  {userDetail.skill}
                </span>
              </p>
              <p className="flex items-center gap-x-1">
                <span>Tautan LinkedIn : </span>
                <span className="font-normal text-sm md:text-lg">
                  {userDetail.linkedinUrl}
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
