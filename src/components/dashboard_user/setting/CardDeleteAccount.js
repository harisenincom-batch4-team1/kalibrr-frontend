import { ModalDelete } from "components/dashboard_user";

export const CardDeleteAccount = () => {
  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border border-gray-200">
      <h1 className="text-white font-medium text-sm md:text-base bg-red-700 py-3 px-4">
        Hapus akun Kalibrr
      </h1>
      <div className="bg-white px-4 md:flex gap-5">
        <div className="space-y-3 pb-5 md:mt-0 w-full">
          <p className="font-normal text-sm border-b-2 py-4">
            Hapus akun bersifat permanen. Semua data anda akan dihapus. Anda
            harus membuat akun Kalibrr baru dan mengisi semua informasi yang
            diperlukan jika ingin melamar.
          </p>
          <ModalDelete />
        </div>
      </div>
    </div>
  );
};
