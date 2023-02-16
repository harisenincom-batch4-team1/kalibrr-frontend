const CardResume = () => {
  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden bg-white border-gray-200 border">
      <h1 className="text-white font-medium text-sm md:text-base bg-blue-700 py-3 px-4">
        Resume
      </h1>
      <div className="py-2 px-3 font-normal text-sm pt-4 md:px-12">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="small_size"
        >
          Unggah Resume
        </label>
        <input
          className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="small_size"
          type="file"
        />
      </div>
    </div>
  );
};

export default CardResume;
