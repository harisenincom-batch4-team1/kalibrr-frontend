import { useJobListContext } from "context";

export const Search = () => {
  const { state, dispatch } = useJobListContext();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "FETCH" });
  };

  return (
    <div className="w-full flex justify-center pt-20 md:pt-24 bg-zinc-50 fixed px-5 z-10">
      <form onSubmit={handleSearch} className="w-[800px] mx-auto">
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
            value={state.inputValue}
            onChange={(e) =>
              dispatch({ type: "CHANGE_INPUT", payload: e.target.value })
            }
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 pr-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ketik untuk mencari..."
            autoComplete="off"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cari
          </button>
        </div>
      </form>
    </div>
  );
};
