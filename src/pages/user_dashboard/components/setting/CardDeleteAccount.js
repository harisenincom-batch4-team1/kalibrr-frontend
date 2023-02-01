import { useState } from "react";
import { Button, Card } from "flowbite-react";
import SpinnerRed from "../loading/SpinnerRed";

const CardDeleteAccount = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-[1px] hover:shadow">
      <h1 className={"text-white font-semibold text-lg py-3 px-4 bg-red-600"}>
        Hapus Akun
      </h1>
      <div className="bg-white px-4 md:flex gap-5">
        <div className="space-y-3 pb-5 md:mt-0 w-full">
          <p className="font-normal md:font-medium border-b-2 py-4">
            Hapus akun bersifat permanen. Semua data anda akan dihapus. Anda
            harus membuat akun Kalibrr baru dan mengisi semua informasi yang
            diperlukan jika ingin melamar.
          </p>
          <div className="w-full flex">
            <Button
              outline={isLoading}
              disabled={isLoading}
              className={
                isLoading ? "ml-auto" : "ml-auto bg-red-800 hover:bg-red-600"
              }
            >
              {isLoading ? <SpinnerRed /> : <span>Hapus</span>}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardDeleteAccount;
