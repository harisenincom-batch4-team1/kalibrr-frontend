import { FileInput, Label } from "flowbite-react";

const CardCV = () => {
  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden bg-white border-gray-200 border">
      <h1 className="text-white font-semibold text-base md:text-xl bg-[#0086FF] py-3 px-4">
        Resume
      </h1>
      <div className="p-5">
        <div id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Unggah resume" />
          </div>
          <FileInput id="file" />
        </div>
      </div>
    </div>
  );
};

export default CardCV;
