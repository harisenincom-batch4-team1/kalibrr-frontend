import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HeaderWithSearch = (props) => {
  return (
    <div className="w-full flex justify-center bg-[#fafafa]">
    <div className="w-full h-fit border-b-[1px] flex items-center py-3 md:py-0 md:px-5">
      <h1 className="text-3xl font-bold py-5 hidden md:block w-64">{props.title}</h1>
      <div className="w-full px-5 md:px-0 mx-auto ">
        <div className="w-full bg-[#edf2f7] flex justify-between rounded-full rouded-full overflow-hidden">
          <input
            type="text"
            className="w-full bg-[#edf2f7] py-3 px-5 outline-none"
            placeholder="Cari Pekerjaan yang Disimpan"
          />
          <MagnifyingGlassIcon className="w-6 mr-5" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeaderWithSearch;
