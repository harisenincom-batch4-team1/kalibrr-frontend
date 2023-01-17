import Title from "../card/Title";

const CardChangePassword = () => {
  return (
    <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-[1px] hover:shadow">
      <Title title={"Ubah Password"} />
      <div className="bg-white px-4 md:flex gap-5">
        <div className="space-y-3 pb-5 md:mt-0 w-full">
          <p className="font-normal md:font-medium border-b-2 py-4">
            Untuk mengubah kata sandi anda, mohon lengkapi data berikut.
          </p>
          <div className="w-full pb-4 space-y-2 border-b-2">
            <div className="space-y-2 border-b-2 pb-5">
              <label className="font-normal md:font-medium">
                Password sekarang
              </label>
              <input
                placeholder="masukkan password disini"
                className="w-full bg-[#fafafa] outline-none py-2 px-4 md:py-3 md:px-5 border-2 rounded-xl focus:border-blue-400"
              />
            </div>
            <div className="space-y-2 pt-2">
              <label className="font-normal md:font-medium">
                Password baru
              </label>
              <input
                placeholder="masukkan email baru disini"
                className="w-full bg-[#fafafa] outline-none py-2 px-4 md:py-3 md:px-5 border-2 rounded-xl focus:border-blue-400"
              />
            </div>
            <div className="space-y-2">
              <label className="font-normal md:font-medium">
                Konfirmasi password baru
              </label>
              <input
                placeholder="masukkan email baru disini"
                className="w-full bg-[#fafafa] outline-none py-2 px-4 md:py-3 md:px-5 border-2 rounded-xl focus:border-blue-400"
              />
            </div>
          </div>
          <div className="w-full flex">
            <button className="bg-[#0086FF] text-white font-normal md:font-medium py-2 px-5 rounded-md hover:bg-blue-400 ml-auto">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardChangePassword;