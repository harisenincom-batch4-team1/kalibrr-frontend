import { useSelector } from "react-redux";


const ErrorSavedJobList = () => {
  const errorMsg = useSelector((state) => state.savedJobListReducer.errorMsg);

  return (
    <div className="text-center mt-10 font-medium md:font-bold text-sm md:text-2xl">
      <h1>{errorMsg}</h1>
    </div>
  );
};

export default ErrorSavedJobList;
