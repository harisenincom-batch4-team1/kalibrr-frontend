import { companyStaticPhotoApi } from "api";
import { HomeGetHiredSkeleton } from "components/skeletons";
import { Link } from "react-router-dom";

export const GetHired = ({ status, errorMsg, datas, truncate, randomId }) => {
  return (
    <div className="flex flex-col h-fit max-w-[1280px] mx-auto bg-[#f7f9fb] rounded-lg my-10 md:mt-14 pb-10">
      <div className="container pb-4 w-full lg:w-1/2">
        <h3 className="text-2xl text-center md:text-4xl md:text-left font-bold">
          Dapatkan pekerjaan dari perusahaan populer
        </h3>
        <p className="mt-4 text-gray-600 text-sm md:text-base md:text-left lg:text-lg mx-auto text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          laboriosam assumenda.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 h-full">
        <div className="w-full lg:w-1/2 grid md:grid-rows-2 md:grid-cols-2 mx-auto gap-3">
          <Link
            to="/"
            className="rounded-lg hover:shadow overflow-hidden border bg-white px-2"
          >
            <div className="container flex flex-row gap-x-3 lg:flex-col grow-0 max-w-80 h-26 bg-white p-3">
              <img
                src={"/assets/TokopediaLogo.png"}
                alt=""
                className="w-16 h-16 object-cover"
              />
              <div className="">
                <p className="text-lg font-bold ">Tokopedia</p>
                <p className="text-gray-600  text-sm">56 Pekerjaan Dibuka</p>
              </div>
            </div>
          </Link>
          <Link
            to="/"
            className="rounded-lg hover:shadow overflow-hidden border bg-white px-2"
          >
            <div className="container flex flex-row gap-x-3 lg:flex-col grow-0 max-w-80 h-26 bg-white p-3">
              <img
                src={"/assets/RuangguruLogo.png"}
                alt=""
                className="w-16 h-16 object-contain"
              />
              <div className="">
                <p className="text-lg font-bold">Ruangguru</p>
                <p className="text-gray-600 text-sm">21 Pekerjaan Dibuka</p>
              </div>
            </div>
          </Link>
          <Link
            to="/"
            className="rounded-lg hover:shadow overflow-hidden border bg-white px-2"
          >
            <div className="container flex flex-row gap-x-3 lg:flex-col grow-0 max-w-80 h-26 bg-white p-3">
              <img
                src={"/assets/ShopeeLogo.png"}
                alt=""
                className="w-16 h-16 object-contain"
              />
              <div className="">
                <p className="text-lg font-bold">Shopee</p>
                <p className="text-gray-600 text-sm">46 Pekerjaan Dibuka</p>
              </div>
            </div>
          </Link>
          <Link
            to="/"
            className="rounded-lg hover:shadow overflow-hidden border bg-white px-2"
          >
            <div className="container flex flex-row gap-x-3 lg:flex-col grow-0 max-w-80 h-26 bg-white p-3">
              <img
                src={"/assets/BCAlogo.png"}
                alt=""
                className="w-16 h-16 object-contain"
              />
              <div className="">
                <p className="text-lg font-bold">BCA</p>
                <p className="text-gray-600 text-sm">12 Pekerjaan Dibuka</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex min-h-full items-center justify-center w-full lg:w-1/2">
          {status === "fetching" && <HomeGetHiredSkeleton />}
          {status === "error" && (
            <div className="mx-auto text-center w-full h-full border rounded-lg bg-white">
              <p className="text-base sm:text-lg font-medium pt-10">
                {errorMsg}
              </p>
              <img
                src="/assets/error.webp"
                alt=""
                className="mx-auto -mb-5 h-64"
              />
            </div>
          )}
          {status === "empty" && (
            <div className="mx-auto text-center w-full h-full border rounded-lg bg-white">
              <p className="text-base sm:text-lg font-medium pt-10">
                Sepertinya belum ada lowongan pekerjaan
              </p>
              <img
                src="/assets/empty.webp"
                alt=""
                className="mx-auto -mb-5 h-64"
              />
            </div>
          )}
          {status === "success" && (
            <div className="w-full gap-3 h-full p-5 pb-16 lg:pb-14 bg-white border rounded-lg hover:shadow dark:bg-gray-800 dark:border-gray-700 relative">
              <img
                src={
                  datas[randomId].Company.photo ===
                  "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                    ? "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                    : companyStaticPhotoApi + datas[randomId].Company.photo
                }
                alt=""
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="mt-3">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {datas[randomId].Company.name}
                </h5>
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {datas[randomId].name}
                </h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: truncate(datas[randomId].jobDescription, 90),
                  }}
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                />
                <Link
                  to={`/job/${datas[randomId].id}`}
                  className="inline-flex absolute bottom-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Lebih lengkap
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2nd section */}
      {/* <div className="max-w-[1200px] flex flex-col-reverse md:flex-row mx-auto w-full">
        <div className="container flex items-center justify-center w-full lg:w-1/2">
          <div className="w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-28 h-28 mb-3 rounded-full shadow-lg"
                src={"/assets/EmployeePhoto.webp"}
                alt=""
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                John Doe
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                UI/UX Designer
              </span>
              <div className="flex flex-row mt-4 items-center">
                <FaMapMarkerAlt className="text-[#0086ff] mr-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Jakarta, Indonesia
                </span>
              </div>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Rekrut saya
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex items-center justify-center w-full lg:w-1/2">
          <div className="container py-10">
            <h3 className="text-2xl text-center md:text-4xl md:text-left font-bold ">
              Hire the best candidates for your company.
            </h3>
            <p className="text-gray-600 text-center md:text-xl md:text-left mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, laboriosam assumenda. Nisi praesentium officiis, vero
              quod sapiente delectus unde! Earum placeat veniam doloremque quod
              iste eius reiciendis soluta animi ut.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
