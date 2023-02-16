import { Button, Card } from "flowbite-react";

const CardDeleteAccount = () => {
  return (
    <Card className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-[1px] hover:shadow">
      <h1 className={"text-white font-semibold text-lg py-3 px-4 bg-red-600"}>
        Hapus Akun Perusahaan
      </h1>
      <div className="bg-white px-4 md:flex gap-5">
        <div className="space-y-3 pb-5 md:mt-0 w-full">
          <p className="font-normal md:font-medium border-b-2 py-4">
            Hapus akun bersifat permanen. Semua data perusahaan akan dihapus.
            Perusahaan harus membuat akun Kalibrr baru dan mengisi semua
            informasi yang diperlukan jika ingin membuat lowongan pekerjaan.
          </p>
          <div className="w-full flex">
            <Button className={"ml-auto bg-red-700 hover:bg-red-800"}>
              Hapus
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardDeleteAccount;
