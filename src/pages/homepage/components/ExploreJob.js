import React from "react";

const ExploreJobs = () => {
  return (
    <div className="mb-10">
      <div className="container mx-auto mt-10 p-5 bg-[#f7f9fb] rounded-lg h-fit flex flex-col justify-center">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center md:text-4xl md:text-left font-bold">
            Explore popular jobs.
          </h1>
          <p className="mt-4 md:text-xl">
            Check out our featured jobs from popular companies.
          </p>
          <p className="md:text-xl">Start applying now, or</p>
          <div className="mt-4 flex">
            <a
              href="/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View all jobs
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 px-5 py-5 mx-auto mt-10 justify-center gap-5">
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/companylogo.png"}
                    alt=""
                    className="w-16 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">A Company </p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fullstack Web Developer
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
              Apply Now
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/companylogo.png"}
                    alt=""
                    className="w-16 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">A Company </p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fullstack Web Developer
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
              Apply Now
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/companylogo.png"}
                    alt=""
                    className="w-16 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">A Company </p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fullstack Web Developer
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
              Apply Now
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/companylogo.png"}
                    alt=""
                    className="w-16 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">A Company </p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fullstack Web Developer
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
              Apply Now
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/companylogo.png"}
                    alt=""
                    className="w-16 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">A Company </p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fullstack Web Developer
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
              Apply Now
            </a>
          </div>

          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-5">
            <a href="/">
              <div className="container flex flex-row grow-0 h-26 bg-white">
                <div className="flex items-center">
                  <img
                    src={"/assets/companylogo.png"}
                    alt=""
                    className="w-16 items-center mx-auto"
                  />
                </div>
                <div className="container grow-0 pb-4">
                  <p className="text-lg font-bold mt-4 pl-4">A Company </p>
                </div>
              </div>
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fullstack Web Developer
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
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreJobs;
