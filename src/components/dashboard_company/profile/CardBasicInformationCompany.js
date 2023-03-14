import { Button } from "flowbite-react";
import { Spinner } from "components";
import {
  companyProfileApi,
  companyStaticPhotoApi,
  userPhotoApi,
  userPutPhotoApi,
} from "api";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const CardBasicInformationCompany = () => {
  const [tag, setTag] = useState("idle");
  const [photo, setPhoto] = useState(null);
  const [datas, setDatas] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleEdit = () => {
    if (tag === "loaded") {
      setName(datas.name);
      setEmail(datas.email);
      setPhone(datas.phone);
      setLocation(datas.location);
      setTag("edit");
      return;
    }
    return setTag("loaded");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTag("submitting");
  };

  const handlePhotoChange = (e) => {
    console.log(e.target.files[0]);
    setPhoto(e.target.files[0]);
  };

  useEffect(() => {
    switch (tag) {
      case "idle":
        setTag("fetching");
        break;
      case "fetching":
        axios(companyProfileApi, {
          headers: {
            Authorization: "Bearer " + Cookies.get("kalibrr-company"),
          },
        })
          .then((res) => {
            setTag("loaded");
            setDatas(res.data.datas[0]);
          })
          .catch((err) => {
            setTag("error");
          });
        break;
      case "submitting":
        switch (true) {
          case photo == null:
            toast.error("harap masukkan foto");
            setTag("edit");
            break;
          case photo != null:
            let formData = new FormData();
            formData.append("photo", photo);
            axios
              .put(
                companyProfileApi,
                {
                  name: name,
                  email: email,
                  phone: phone,
                  location: location,
                  photo: formData,
                },
                {
                  headers: {
                    "content-type": "multipart/form-data",
                    Authorization: "Bearer " + Cookies.get("kalibrr-company"),
                  },
                }
              )
              .then((res) => {
                setTag("idle");
                setPhoto(null);
                toast.success(res.data.message);
              })
              .catch((err) => {
                toast.error(err?.message);
              });
            break;
          default:
            break;
        }
      default:
        break;
    }
  }, [tag]);

  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-gray-200 border relative">
      <h1 className="text-white font-medium text-sm md:text-base bg-blue-600 py-3 px-4">
        Informasi Dasar
      </h1>
      <button
        onClick={handleEdit}
        className="absolute right-0 top-0 py-3 px-4 text-white font-medium text-sm md:text-base"
      >
        Edit
      </button>
      <div className="bg-white py-3 px-4 md:flex md:flex-col gap-5">
        <div className="rounded-full w-16 h-16 md:w-24 md:h-24 overflow-hidden sm:ml-6 mt-2">
          <img
            src={companyStaticPhotoApi + datas.photo || datas.photo}
            className="rounded-full w-full h-full object-cover"
            alt="profile"
          />
        </div>
        {tag === "edit" || tag === "submitting" ? (
          <>
            <input
              onChange={handlePhotoChange}
              type="file"
              className="-mt-5 bg-gray-400 rounded-full w-28 h-fit absolute left-36 top-36"
              placeholder="Ganti foto"
              name="Ganti foto"
            />
            <form
              onSubmit={handleSubmit}
              className="max-w-full flex flex-wrap justify-between gap-y-2 mt-5 relative"
            >
              <div className="w-full">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="small-input"
                  autoComplete="off"
                  className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="small-input"
                  autoComplete="off"
                  className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Telepon
                </label>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  id="small-input"
                  autoComplete="off"
                  className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lokasi
                </label>
                <input
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  id="small-input"
                  autoComplete="off"
                  className="block w-full h-8 md:h-10 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="ml-auto mt-2 w-full md:w-24 h-10"
                disabled={tag === "submitting"}
              >
                {tag === "submitting" ? <Spinner /> : "Simpan"}
              </Button>
            </form>
          </>
        ) : (
          <></>
        )}
        {tag === "loaded" ? (
          <div className="mt-5 md:mt-0 flex justify-between flex-col sm:flex-row sm:w-11/12 mx-auto">
            <div className="space-y-1 w-full">
              <p className="flex items-center gap-x-1 text-sm md:text-base">
                Nama : {datas.name}
              </p>
              <p className="flex items-center gap-x-1 text-sm md:text-base">
                Email : {datas.email}
              </p>
              <p className="flex items-center gap-x-1 text-sm md:text-base">
                Telepon : {datas.phone ? datas.phone : "-"}
              </p>
              <p className="flex items-center gap-x-1 text-sm md:text-base">
                Lokasi : {datas.location ? datas.location : "-"}
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
