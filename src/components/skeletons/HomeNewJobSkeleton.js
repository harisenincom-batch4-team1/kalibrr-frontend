export const HomeNewJobSkeleton = () => {
  return (
    <div
      role="status"
      className="w-full p-4 border flex flex-col h-full justify-between hover:shadow border-gray-200 rounded-lg bg-white animate-pulse md:p-6 dark:border-gray-700"
    >
      <div>
        <div className="flex items-center justify-center h-24 w-24 mb-4 bg-gray-200 rounded dark:bg-gray-700" />
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2" />
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-44 mb-4" />
        <div className="h-2 bg-gray-200 w-11/12 rounded-full dark:bg-gray-700 mb-2.5" />
        <div className="h-2 bg-gray-200 w-8/12 rounded-full dark:bg-gray-700 mb-2.5" />
      </div>
      <div className="h-8 mt-2 bg-gray-200 rounded-md w-24 dark:bg-gray-700" />
    </div>
  );
};
