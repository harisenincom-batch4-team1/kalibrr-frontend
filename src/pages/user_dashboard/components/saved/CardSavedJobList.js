import { useDispatch, useSelector } from "react-redux";
import { HiBriefcase, HiMapPin, HiBanknotes, HiBookmark } from "react-icons/hi2";

const CardSavedJobList = () => {
  const dispatch = useDispatch();
  const savedJobList = useSelector(
    (state) => state.savedJobListReducer.savedJobList
  );
  const jobDetailId = useSelector(
    (state) => state.savedJobListReducer.jobDetailId
  );
  const tagDetail = useSelector((state) => state.savedJobListReducer.tagDetail);

  const getDetail = (data) => {
    if (jobDetailId !== data.id && tagDetail !== "loading") {
      dispatch({ type: "FETCH_DETAIL", payload: data.id });
    }
  };

  return savedJobList.map((data, i) => {
    return (
      <div
        onClick={() => getDetail(data)}
        key={i}
        className={
          "bg-white border-[1px] rounded-md p-3 md:p-5 relative cursor-pointer hover:shadow-md transition-all duration-200"
        }
      >
        <div className="flex items-center space-x-4 mb-3">
          <div className="h-8 w-8 md:h-12 md:w-12 flex items-center justify-center">
            <img
              src={data.companyDetail.companyLogo}
              className="w-full h-auto rounded-sm"
              alt="company-logo"
            />
          </div>
          <div className="flex w-full justify-between">
            <div>
              <h1 className="text-sm md:text-xl font-medium">{data.title}</h1>
              <h2 className="text-blue-500 text-sm md:text-lg font-normal md:text-medium">
                {data.companyDetail.companyName}
              </h2>
            </div>
            <div className="">
              <HiBookmark className="h-6 w-6 rounded-lg hover:text-slate-700 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="space-y-1 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <HiMapPin className="h-5" />
            <span className="">{data.companyDetail.companyLocation}</span>
          </div>
          <div className="flex items-center space-x-2">
            <HiBanknotes className="h-5" />
            <span className="">{data.salaryMin}</span>
          </div>
          <div className="flex items-center space-x-2">
            <HiBriefcase className="h-5" />
            <span className="">{data.jobType}</span>
          </div>
        </div>
      </div>
    );
  });
};

export default CardSavedJobList;
