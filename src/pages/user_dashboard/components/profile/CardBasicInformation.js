import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Title from "../card/Title";

const CardBasicInformation = () => {
  const [userDetail, setUserDetail] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [skill, setSkill] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
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
      })
      .catch((err) => console.log(err));
  };

  const handleIsEdit = () => {
    setIsEdit((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_USER, {
        headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
      })
      .then((res) => {
        setUserDetail(res.data.datas);
      })
      .catch((err) => console.log(err?.message));
  }, [isEdit]);

  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-[1px] hover:shadow relative">
      <Title title={"Informasi Dasar"} />
      <button
        onClick={handleIsEdit}
        className="absolute right-0 top-0 py-3 px-4 text-white font-semibold"
      >
        {isEdit ? "Batal" : "Edit"}
      </button>
      <div className="bg-white py-3 px-4 md:flex md:flex-col gap-5">
        <div className="rounded-full w-16 h-16 md:w-24 md:h-24 overflow-hidden mx-auto mt-2">
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
              defaultValue={"Vicky"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder={"Nama"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder={"Lokasi"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder={"Telepon"}
              type="number"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              placeholder={"Gelar"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={skill}
              onChange={(e) => {
                setSkill(e.target.value);
              }}
              placeholder={"Keahlian"}
              type="text"
              className="w-full sm:w-[49%] bg-slate-100 outline-none rounded-md py-2 px-4 focus:outline-blue-400"
            />
            <input
              value={linkedinUrl}
              onChange={(e) => {
                setLinkedinUrl(e.target.value);
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
          <div className="space-y-2 mt-5 md:mt-0">
            <p className="flex items-center gap-x-1">
              <UserCircleIcon className="h-4 md:h-7" />
              <span className="font-normal text-sm md:text-2xl">
                {userDetail.name}
              </span>
            </p>
            <p className="flex items-center gap-x-1">
              <EnvelopeIcon className="h-4 md:h-7" />
              <span className="font-normal text-sm md:text-2xl">
                {userDetail.email}
              </span>
            </p>
            <p className="flex items-center gap-x-1">
              <MapPinIcon className="h-4 md:h-7" />
              <span className="font-normal text-sm md:text-2xl">
                {userDetail.location
                  ? userDetail.location
                  : "Belum menambahkan lokasi"}
              </span>
            </p>
            <p className="flex items-center gap-x-1">
              <PhoneIcon className="h-4 md:h-7" />
              <span className="font-normal text-sm md:text-2xl">
                {userDetail.phone
                  ? userDetail.phone
                  : "Belum menambahkan telepon"}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardBasicInformation;
