import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="pt-24" />
      <div className="container mx-auto bg-[#f7f9fb] rounded-lg">
        <div className="container flex flex-auto mx-auto rounded-md">
          <div className="w-screen container flex flex-col md:w-1/2 mx-8 my-8 ">
            <div className="container ">
              <h1 className="text-5xl font-extrabold">
                Find your dream job with
                <p className="text-5xl text-[#0086ff] mt-4">Kalibrr</p>
              </h1>
              <p className="text-gray-600 text-xl mt-8">
                Get the most exciting jobs from all around the world and grow
                your career fast with others.
              </p>
            </div>
            <div className="container mt-8">
              <form>
                <div className="flex">
                  <button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                  >
                    Job Title
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Job Title
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Location
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Company
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="What kind of role do you want?"
                      required=""
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-600 rounded-r-lg border border-[#0086ff] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="container mt-8 font-semibold">
              <text>Popular Search: </text>
              <text className="text-gray-500">
                <a href="/">Software developer, </a>
                <a href="/">UI/UX Designer, </a>
                <a href="/">Digital Marketer </a>
              </text>
            </div>
          </div>
          {/* <div className="invisible lg:visible container flex items-center w-1/2 mx-8 my-8">
          <img
            src={"/assets/Hero.jpg"}
            alt=""
            className="flex h-[480px] opacity-90 mx-auto"
          />
        </div> */}
        </div>

        <div className="container mx-auto mt-5 py-10 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-full">
          <div className="flex flex-row gap-4">
            <div className="container mx-auto">
              <a href="/">
                <img
                  src={"/assets/companylogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </a>
            </div>
            <div className="container mx-auto">
              <a href="/">
                <img
                  src={"/assets/companylogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </a>
            </div>
            <div className="container mx-auto">
              <a href="/">
                <img
                  src={"/assets/companylogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </a>
            </div>
            <div className="container mx-auto">
              <a href="/">
                <img
                  src={"/assets/companylogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </a>
            </div>
            <div className="container mx-auto">
              <a href="/">
                <img
                  src={"/assets/companylogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
