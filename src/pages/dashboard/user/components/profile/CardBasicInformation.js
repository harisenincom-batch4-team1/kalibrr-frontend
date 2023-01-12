import Title from "./Title";

const CardBasicInformation = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden border-[1px] hover:shadow relative">
      <Title title={"Informasi Dasar"} />
      <button className="absolute right-0 top-0 py-3 px-4 text-white font-medium">
        Edit
      </button>
      <div className="bg-white py-3 px-4 md:flex gap-5">
        <div className="rounded-full w-24 h-24 overflow-hidden">
          <img
            className="rounded-full w-24"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Andrew_Tate_on_%27Anything_Goes_With_James_English%27_in_2021.jpg"
            alt="profile"
          />
        </div>
        <div className="space-y-1 mt-5 md:mt-0">
          <p className="font-medium text-2xl">Andrew Tate</p>
          <p className="text-xl">Sumatera</p>
          <p>andrew@tate.com</p>
          <p>082300091823</p>
        </div>
        {/* <div className="bg-red-700 max-w-full h-2">
          <input type="text" className="bg-slate-100 outline-none"/>
        </div> */}
      </div>
    </div>
  );
};

export default CardBasicInformation;
