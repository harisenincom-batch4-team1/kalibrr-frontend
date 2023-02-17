const JobDetailSkeleton = () => {
  return (
    <div className="w-full px-5">
      <div
        role="status"
        className="pt-24 animate-pulse max-w-[800px] mx-auto p-5 bg-transparent rounded-lg relative"
      >
        <div className="flex w-full">
          <div className="h-28 w-56 sm:w-36 mr-5 bg-gray-200 rounded-md dark:bg-gray-700" />
          <div className="w-full flex flex-col gap-2">
            <div className="h-4 w-[85%] sm:w-[50%] bg-gray-200 rounded-sm" />
            <div className="h-4 w-[50%] sm:w-[40%] bg-gray-200 rounded-sm" />
            <div className="w-full sm:w-1/2 flex gap-2 mt-12">
              <div className="h-4 w-1/3 sm:w-[30%] bg-gray-200 rounded-sm" />
              <div className="h-4 w-1/3 sm:w-[30%] bg-gray-200 rounded-sm" />
            </div>
          </div>
        </div>
        <div className="h-8 w-32 bg-gray-200 rounded-md mt-4 sm:absolute right-4 top-40" />
        <hr className="my-5" />
        <div className="w-full">
          <div className="w-[50%] sm:w-[30%] h-4 bg-gray-200 rounded-sm mb-4" />
          <div className="w-[90%] sm:w-[70%] h-2.5 bg-gray-200 rounded-sm mb-2" />
          <div className="w-[90%] sm:w-[70%] h-2.5 bg-gray-200 rounded-sm mb-2" />
          <div className="w-[90%] sm:w-[70%] h-2.5 bg-gray-200 rounded-sm mb-2" />
          <div className="w-[90%] sm:w-[70%] h-2.5 bg-gray-200 rounded-sm mb-2" />
        </div>
        <div className="w-full mt-5">
          <div className="w-[50%] sm:w-[30%] h-4 bg-gray-200 rounded-sm mb-4" />
          <div className="w-[90%] sm:w-[70%] h-2.5 bg-gray-200 rounded-sm mb-2" />
          <div className="w-[90%] sm:w-[70%] h-2.5 bg-gray-200 rounded-sm mb-2" />
          <div className="w-[90%] sm:w-[70%] h-2.5 bg-gray-200 rounded-sm mb-2" />
          <div className="w-[90%] sm:w-[70%] h-2.5 bg-gray-200 rounded-sm mb-2" />
        </div>
      </div>
    </div>
  );
};

export default JobDetailSkeleton;
