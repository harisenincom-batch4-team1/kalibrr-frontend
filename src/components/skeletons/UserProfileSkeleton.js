export const UserProfileSkeleton = () => {
  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-gray-200 border relative p-5">
      <div role="status" className="w-full animate-pulse">
        <div className="h-16 w-16 rounded-full bg-gray-200 mb-5" />
        <div className="md:flex md:flex-wrap md:gap-x-5 md:gap-y-2">
          <div className="h-2 md:h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[50%] md:w-[48%] mb-2.5" />
          <div className="h-2 md:h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[50%] md:w-[48%] mb-2.5" />
          <div className="h-2 md:h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[50%] md:w-[48%] mb-2.5" />
          <div className="h-2 md:h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[70%] md:w-[48%] mb-2.5" />
          <div className="h-2 md:h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[70%] md:w-[48%] mb-2.5" />
          <div className="h-2 md:h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[70%] md:w-[48%] mb-2.5" />
        </div>
      </div>
    </div>
  );
};
