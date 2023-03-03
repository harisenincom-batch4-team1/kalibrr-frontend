export const ExploreJobs = () => {
  return (
    <div className="mb-10">
      <div className="container mx-auto mt-10 p-5 bg-[#f7f9fb] rounded-lg h-fit flex flex-col justify-center">
        <div className="container mx-auto px-10 py-5">
          <h1 className="text-2xl text-center md:text-4xl  font-bold">
            Jelajahi pekerjaan populer.
          </h1>
          <p className="mt-4 text-center md:text-xl">
            Lihat pekerjaan unggulan dari perusahaan populer
          </p>
          <p className="text-center md:text-xl ">
            Mulai melamar sekarang, atau
          </p>
          <div className="mt-4 flex w-full justify-center">
            <a
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lihat semua pekerjaan
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
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 px-5 py-5 mt-10 gap-5">
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/BCALogo.png"}
                    alt=""
                    className="w-28 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Bank BCA </p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Staf Rekrutmen
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Responsibilities: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Blanditiis corporis nihil reiciendis animi
              dolorem inventore quod obcaecati modi cupiditate, aliquam autem
              officia error veniam consectetur quam nobis maiores eius. Omnis!
            </p>
            <a
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lamar Sekarang
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/RuangguruLogo.png"}
                    alt=""
                    className="w-28 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Ruangguru</p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Freelance Tutor
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Responsibilities: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Blanditiis corporis nihil reiciendis animi
              dolorem inventore quod obcaecati modi cupiditate, aliquam autem
              officia error veniam consectetur quam nobis maiores eius. Omnis!
            </p>
            <a
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lamar Sekarang
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/Tokopedialogo.png"}
                    alt=""
                    className="w-28 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Tokopedia</p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Backend Engineer
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Responsibilities: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Blanditiis corporis nihil reiciendis animi
              dolorem inventore quod obcaecati modi cupiditate, aliquam autem
              officia error veniam consectetur quam nobis maiores eius. Omnis!
            </p>
            <a
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lamar Sekarang
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/BNIlogo.png"}
                    alt=""
                    className="w-28 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Bank BNI</p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Security Engineer
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Responsibilities: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Blanditiis corporis nihil reiciendis animi
              dolorem inventore quod obcaecati modi cupiditate, aliquam autem
              officia error veniam consectetur quam nobis maiores eius. Omnis!
            </p>
            <a
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lamar Sekarang
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/Travelokalogo.webp"}
                    alt=""
                    className="w-28 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Traveloka</p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Site Reliability Engineer
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Responsibilities: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Blanditiis corporis nihil reiciendis animi
              dolorem inventore quod obcaecati modi cupiditate, aliquam autem
              officia error veniam consectetur quam nobis maiores eius. Omnis!
            </p>
            <a
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lamar Sekarang
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/Shopeelogo.png"}
                    alt=""
                    className="w-28 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">Shopee</p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Customer Service (Contract)
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Responsibilities: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Blanditiis corporis nihil reiciendis animi
              dolorem inventore quod obcaecati modi cupiditate, aliquam autem
              officia error veniam consectetur quam nobis maiores eius. Omnis!
            </p>
            <a
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lamar Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
