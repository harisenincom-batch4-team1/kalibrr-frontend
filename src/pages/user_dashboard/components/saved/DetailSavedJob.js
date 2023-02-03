import { useSelector } from "react-redux";
import { HiBookmark } from "react-icons/hi2";
import convertRupiah from "rupiah-format";

const DetailSavedJob = () => {
  const savedJobListDetail = useSelector(
    (state) => state.savedJobListReducer.savedJobListDetail
  );

  return (
    <div>
      <div className="w-full flex items-center h-24">
        <img
          src={savedJobListDetail?.companyDetail?.companyLogo}
          alt="company logo"
          className="h-24 w-auto p-2 mr-5"
        />
        <div className="flex flex-col h-full">
          <h1 className="font-bold text-2xl xl:text-3xl">
            {savedJobListDetail.title}
          </h1>
          <h2 className="font-semibold text-xl text-blue-500">
            {savedJobListDetail?.companyDetail?.companyName}
          </h2>
          <h4 className="font-medium text-base text-slate-800">
            {savedJobListDetail?.companyDetail?.companyLocation}
          </h4>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-lg xl:text-xl font-semibold">
          {convertRupiah.convert(savedJobListDetail?.salaryMin)} -{" "}
          {convertRupiah.convert(savedJobListDetail?.salaryMax)}
        </p>
        <p className="text-lg xl:text-xl font-semibold">
          {savedJobListDetail?.jobTenure}
        </p>
      </div>
      <div className="py-5 border-b-[1px] flex items-center justify-between">
        <button className="bg-[#0086FF] text-white py-3 px-5 font-medium text-lg rounded-lg active:scale-[99%]">
          Lamar Sekarang
        </button>
        <HiBookmark className="h-12 w-12 rounded-lg hover:text-slate-700 cursor-pointer active:scale-[99%]" />
      </div>
      <div>
        <h1 className="text-2xl font-bold my-3">Deskripsi Pekerjaan</h1>
        {savedJobListDetail?.jobDescription.map((data, i) => {
          return <li key={i}>{data}</li>;
        })}
        <h1 className="text-2xl font-bold my-3 pt-2">Kualifikasi Minimum</h1>
        {savedJobListDetail?.jobQualification.map((data, i) => {
          return <li key={i}>{data}</li>;
        })}
      </div>
    </div>
  );
};

export default DetailSavedJob;
