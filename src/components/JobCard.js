import { useJobListContext } from "../context/joblist-context";

const JobCard = () => {
  const { state, dispatch } = useJobListContext();

  {
    return state.datas.map((data, i) => {
      return (
        <div
          key={i}
          className="border border-gray-200 w-[340px] md:w-[400px] p-5 rounded-lg hover:shadow cursor-pointer"
        >
          <h1 className="text-base font-bold">{data.name}</h1>
          <p>{data.type}</p>
          <div className="mt-5 flex items-center gap-3">
            <img
              src={data.Company.photo}
              className="w-14 p-2 bg-gray-100 rounded-xl"
            />
            <div className="flex flex-col justify-between h-12">
              <h1 className="text-sm font-bold">{data.Company.name}</h1>
              <h1 className="text-sm font-normal">{data.Company.location}</h1>
            </div>
          </div>
        </div>
      );
    });
  }
};

export default JobCard;
