import { useSelector } from "react-redux";

const ErrorDetailSavedJobList = () => {
  const errorMsg = useSelector((state) => state.savedJobListReducer.errorMsg);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="font-semibold text-2xl">{errorMsg}</h1>
    </div>
  );
};

export default ErrorDetailSavedJobList;
