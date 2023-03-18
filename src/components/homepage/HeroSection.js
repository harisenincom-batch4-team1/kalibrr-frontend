import { useJobListContext } from "context";
import { Link, useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { state, dispatch } = useJobListContext();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "FETCH" });
    navigate("/job");
  };

  return (
    <>
      <div className="pt-16 md:pt-24" />
      <div className="max-w-[1280px] mx-auto bg-[#f7f9fb] rounded-lg">
        <div className="flex flex-auto mx-auto rounded-md relative">
          <div className="lg:w-1/2 w-full my-8">
            <div className="">
              <h1 className="text-3xl md:text-5xl font-extrabold">
                Temukan pekerjaan impianmu bersama
                <p className="text-3xl md:text-5xl text-[#0086ff] mt-4">
                  Kalibrr
                </p>
              </h1>
              <p className="text-gray-600 md:text-xl mt-8">
                Bersama Kalibrr, #kejarsuksesmu sekarang!
              </p>
            </div>
            <div className="mt-8">
              <form onSubmit={handleSearch}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                  </div>
                  <input
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_INPUT",
                        payload: e.target.value,
                      })
                    }
                    value={state.inputValue}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cari pekerjaan yang kamu mau"
                    required
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Cari
                  </button>
                </div>
              </form>
            </div>
            <div className="container mt-8 font-semibold">
              <p>Pencarian Populer: </p>
              <div className="text-gray-500">
                <Link to="/">Software developer, </Link>
                <Link to="/">UI/UX Designer, </Link>
                <Link to="/">Digital Marketer </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 absolute right-0 bottom-3">
            <img
              src={"/assets/Hero.png"}
              alt=""
              className="hidden lg:block"
            />
          </div>
        </div>

        <div className="container mx-auto py-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-full">
          <div className="flex flex-row gap-4">
            <div className="container mx-auto">
              <Link to="/">
                <img
                  src={"/assets/BCAlogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </Link>
            </div>
            <div className="container mx-auto">
              <Link to="/">
                <img
                  src={"/assets/BNIlogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </Link>
            </div>
            <div className="container mx-auto">
              <Link to="/">
                <img
                  src={"/assets/TokopediaLogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </Link>
            </div>
            <div className="container mx-auto">
              <Link to="/">
                <img
                  src={"/assets/RuangguruLogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </Link>
            </div>
            <div className="container mx-auto">
              <Link to="/">
                <img
                  src={"/assets/ShopeeLogo.png"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </Link>
            </div>
            <div className="container mx-auto">
              <Link to="/">
                <img
                  src={"/assets/TravelokaLogo.webp"}
                  alt=""
                  className="max-w-fit w-52 h-36 content-center object-contain mx-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
