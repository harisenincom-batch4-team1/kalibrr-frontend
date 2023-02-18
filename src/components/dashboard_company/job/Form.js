import { Button, Label, TextInput } from "flowbite-react";
import { useCompanyJobContext } from "../../../context/company-job-context";
import { DefaultEditor } from "react-simple-wysiwyg";

const Form = () => {
  const { state, dispatch } = useCompanyJobContext();

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex flex-col gap-4">
        <Label htmlFor="name" value="Nama Pekerjaan" />
        <TextInput
          id="name"
          name="name"
          type="text"
          sizing="md"
          placeholder="Frontend Engineer"
          autoComplete="off"
          className="-mt-2"
        />
        <Label htmlFor="type" value="Tipe Pekerjaan" />
        <TextInput
          id="type"
          name="type"
          type="text"
          sizing="md"
          placeholder="Remote, Hybrid, WFO, dll"
          autoComplete="off"
          className="-mt-2 bg-white"
        />
        <Label htmlFor="tenure" value="Masa Pekerjaan" />
        <TextInput
          id="tenure"
          name="tenure"
          type="text"
          sizing="md"
          placeholder="Paruh waktu, Magang, dll"
          autoComplete="off"
          className="-mt-2 bg-white"
        />
        <div className="flex gap-2 w-full">
          <div>
            <Label htmlFor="salaryMin" value="Gaji Minimum" />
            <TextInput
              id="salaryMin"
              name="salaryMin"
              type="number"
              sizing="md"
              placeholder="4000000"
              autoComplete="off"
              className=" bg-white"
            />
          </div>
          <div>
            <Label htmlFor="salaryMax" value="Gaji Maksimum" />
            <TextInput
              id="salaryMax"
              name="salaryMax"
              type="number"
              sizing="md"
              placeholder="8000000"
              autoComplete="off"
              className=" bg-white"
            />
          </div>
        </div>
        <Label
          htmlFor="description"
          value="Deskripsi Pekerjaan"
          className="-mb-2"
        />
        <DefaultEditor />
        <Label
          htmlFor="description"
          value="Kualifikasi Pekerjaan"
          className="-mb-2"
        />
        <DefaultEditor />
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="salaryMax" value="Status Lowongan Kerja" />
          <div className="flex items-center gap-2">
            <TextInput
              id="salaryMax"
              name="salaryMax"
              type="radio"
              sizing="sm"
              placeholder="8000000"
              autoComplete="off"
              className="rounded-full"
              value={1}
            />
            <Label htmlFor="salaryMax" value="Buka" />
          </div>
          <div className="flex items-center gap-2">
            <TextInput
              id="salaryMax"
              name="salaryMax"
              type="radio"
              sizing="sm"
              placeholder="8000000"
              autoComplete="off"
              className="rounded-full"
              value={0}
            />
            <Label htmlFor="salaryMax" value="Tutup" />
          </div>
        </div>
        <Button className="my-5 sm:w-20 h-10">Kirim</Button>
      </div>
    </div>
  );
};

export default Form;
