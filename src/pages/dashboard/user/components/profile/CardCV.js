import Title from "./Title";

const CardCV = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden border-[1px] hover:shadow">
      <Title title={"CV"} />
      <div className="bg-white px-4 md:flex gap-5">
        <div className="space-y-3 my-5 md:mt-0 w-full">
          <label
            className="block my-2 text-xl font-medium"
            htmlFor="file_input"
          >
            Unggah CV Anda
          </label>
          <input
            className="block w-full text-lg cursor-pointer text-gray-900 border-[1px]"
            id="file_input"
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCV;
