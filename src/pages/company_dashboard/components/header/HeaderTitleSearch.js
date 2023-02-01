import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HeaderSearchApplicant = ({ title, input, setInput, placeholder }) => {
  return (
    <div className="w-full flex justify-center bg-[#fafafa]">
      <div className="w-full h-fit border-b-[1px] flex items-center py-3 md:py-0 md:px-5">
        <h1 className="text-3xl font-bold py-5 hidden md:block w-96">
          {title}
        </h1>
        <div className="w-full md:w-11/12 px-5 md:px-0 mx-auto">
          <div className="w-full bg-[#edf2f7] flex items-center justify-between rounded-full rouded-full overflow-hidden">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              // disabled={isDisabled}
              type="text"
              className="w-full bg-[#edf2f7] py-3 px-5 outline-none"
              placeholder={placeholder}
            />
            <MagnifyingGlassIcon className="w-12 h-12 cursor-pointer hover:bg-slate-200 p-3 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchApplicant;
