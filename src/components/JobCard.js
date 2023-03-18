import { useNavigate } from "react-router-dom";
import { useJobListContext } from "context";
import rupiahFormat from "rupiah-format";
import moment from "moment";
import { companyPhotoApi, companyStaticPhotoApi } from "api";

export const JobCard = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useJobListContext();

  const handleDetailJob = (id) => {
    navigate("/job/" + id);
  };

  const truncate = (text, number) => {
    if (text.length > number) {
      return text.slice(0, number) + "...";
    }
    return text;
  };

  {
    return state?.datas?.result?.map((data, i) => {
      return (
        <div
          onClick={() => handleDetailJob(data.id)}
          key={i}
          className="relative border border-gray-200 w-[100%] sm:w-[49%] p-3 rounded-lg hover:shadow cursor-pointer bg-white"
        >
          <h1 className="text-base font-bold">{truncate(data.name, 18)}</h1>
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            {rupiahFormat.convert(data.salaryMin)}
          </span>
          <div className="absolute top-3 right-1">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {data.type}
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {data.tenure}
            </span>
            <span
              className={
                data.status == 0 &&
                "absolute top-8 right-0 bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
              }
            >
              {data.status == 0 && "Close"}
            </span>
          </div>
          <div className="mt-4 md:mt-7 flex items-center gap-3">
            <img
              src={
                data.Company.photo ===
                "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                  ? "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                  : companyStaticPhotoApi + data.Company.photo
              }
              className="w-10 h-10 object-cover bg-white rounded-md border"
            />
            <div className="">
              <h1 className="text-sm font-bold">{data.Company.name}</h1>
              <h1 className="text-sm font-normal">{data.Company.location}</h1>
            </div>
          </div>
          <span className="absolute right-1 bottom-4 bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {moment(data.updatedAt).format("MM/DD/YYYY")}
          </span>
        </div>
      );
    });
  }
};
