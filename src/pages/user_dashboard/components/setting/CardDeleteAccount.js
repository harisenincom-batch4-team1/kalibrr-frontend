const CardDeleteAccount = () => {
  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-[1px] hover:shadow">
      <h1 className="text-white font-semibold text-base md:text-xl bg-rose-600 py-3 px-4">
        Hapus Akun
      </h1>
      <div className="bg-white px-4 md:flex gap-5">
        <div className="space-y-3 pb-5 md:mt-0 w-full">
          <p className="font-normal md:font-medium border-b-2 py-4">
            Hapus akun bersifat permanen. Semua data profil dan hasil tes
            keahlian Anda akan dihapus. Anda harus membuat akun Kalibrr baru dan
            mengisi semua informasi yang diperlukan jika ingin melamar.
          </p>
          <div className="w-full flex">
            <button className="bg-rose-600 hover:bg-rose-500 text-white font-normal md:font-medium py-2 px-6 rounded-md  ml-auto">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeleteAccount;
