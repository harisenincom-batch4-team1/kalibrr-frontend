export const SkeletonJobDetail = () => {
  return (
    <div>
      <div className="rounded-md p-4 w-full mx-auto bg-white">
        <div className="animate-pulse flex flex-col pl-2">
          <div className="flex space-x-5">
            <div className="rounded-lg bg-slate-200 h-28 w-36" />
            <div className="w-9/12 space-y-3">
              <div className="h-6 w-[80%] bg-slate-200 rounded" />
              <div className="h-3 w-[30%] bg-slate-200 rounded" />
              <div className="h-3 w-[40%] bg-slate-200 rounded" />
            </div>
          </div>
          <div className="mt-5 mr-2 space-y-3">
            <div className="h-3 w-[40%] bg-slate-200 rounded"></div>
            <div className="h-3 w-[40%] bg-slate-200 rounded"></div>
          </div>
          <div className="mt-8 mr-2 space-y-3">
            <div className="h-12 w-[30%] bg-slate-200 rounded"></div>
          </div>
          <div className="mt-10 mr-2 space-y-3">
            <div className="h-5 w-[50%] bg-slate-200 rounded mb-5"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
          </div>
          <div className="mt-10 mr-2 space-y-3">
            <div className="h-5 w-[50%] bg-slate-200 rounded mb-5"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
