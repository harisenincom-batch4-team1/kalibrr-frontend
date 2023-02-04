import { Card, FileInput, Label } from "flowbite-react";

const CardCV = () => {
  return (
    <Card className="max-w-[800px] p-5 mx-auto rounded-lg overflow-hidden border-[1px] hover:shadow">
      <div id="fileUpload">
        <div className="mb-2 block">
          <Label htmlFor="file" value="Unggah resume" />
        </div>
        <FileInput
          id="file"
        />
      </div>
    </Card>
  );
};

export default CardCV;
