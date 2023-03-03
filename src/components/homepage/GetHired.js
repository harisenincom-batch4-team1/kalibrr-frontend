import { FaMapMarkerAlt } from "react-icons/fa";

export const GetHired = () => {
  return (
    <div className="flex flex-col container mx-auto bg-[#f7f9fb] rounded-lg p-5">
      <div className="max-w-[1200px] flex flex-col md:flex-row mx-auto">
        <div className="bg-[#f7f9fb] w-full md:w-1/2">
          <div className="container">
            <h3 className="text-2xl text-center md:text-4xl md:text-left font-bold ">
              Dapatkan pekerjaan dari perusahaan populer.
            </h3>
            <p className="text-gray-600 text-center md:text-left md:text-xl mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, laboriosam assumenda. Nisi praesentium officiis, vero
              quod sapiente delectus unde! Earum placeat veniam doloremque quod
              iste eius reiciendis soluta animi ut.
            </p>
          </div>
          <div className="w-full container grid mt-5 md:grid-rows-2 md:grid-cols-2 mx-auto gap-x-5 gap-y-5 md:auto-cols-auto pb-10">
            <a href="/">
              <div className="container flex flex-row grow-0 max-w-80 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/TokopediaLogo.png"}
                    alt=""
                    className="w-36 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Tokopedia</p>
                  <p className="text-gray-600 pl-4 text-sm">
                    56 Pekerjaan Dibuka
                  </p>
                </div>
              </div>
            </a>
            <a href="/">
              <div className="container flex flex-row grow-0 max-w-80 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/RuangguruLogo.png"}
                    alt=""
                    className="w-36 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Ruangguru </p>
                  <p className="text-gray-600 pl-4 text-sm">
                  21 Pekerjaan Dibuka
                  </p>
                </div>
              </div>
            </a>
            <a href="/">
              <div className="container flex flex-row grow-0 max-w-80 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/ShopeeLogo.png"}
                    alt=""
                    className="w-36 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Shopee </p>
                  <p className="text-gray-600 pl-4 text-sm">
                  46 Pekerjaan Dibuka
                  </p>
                </div>
              </div>
            </a>
            <a href="/">
              <div className="container flex flex-row grow-0 max-w-80 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/BCALogo.png"}
                    alt=""
                    className="w-36 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Bank BCA</p>
                  <p className="text-gray-600 pl-4 text-sm">
                  12 Pekerjaan Dibuka
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="container flex items-center justify-center w-full md:w-1/2">
          <div className="w-full max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5 md:mt-7">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/TravelokaLogo.webp"}
                    alt=""
                    className="w-36 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Traveloka</p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Front End Developer
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Responsibilities: Developing front-end web architecture
              Developing/extending front-end components. Ensuring responsiveness
              and scalability of applications. Understand and translate business
              requirements into a functional and appealing interactive
              application. Collaborate with backend engineer...
            </p>
            <a
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            </a>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <div className="max-w-[1200px] flex flex-col-reverse md:flex-row mx-auto w-full">
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
      </div>
    </div>
  );
};
