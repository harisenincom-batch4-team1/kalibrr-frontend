import { Link } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";

const SignUp = () => {
  return (
    <PublicLayout>
      <div className="w-full h-full mx-auto mt-16 bg-[#f7f9fb]">
        <div className="flex flex-col mx-auto">
          <h1 className="text-xl font-semibold py-4 text-center">
            Selamat datang di Kalibrr!
          </h1>
          <p className="pb-4 text-center">
            Pertama-tama, apa tujuan anda disini?
          </p>
        </div>
        <div className="container mx-auto bg-white">
        </div>
          <div className="flex mx-auto px-4 py-10 sm:rounded-1xl sm:p-20">
            <div className="grid sm:grid-cols-2 gap-2 mx-auto">
              <div className="border-b sm:border-b-0 sm:border-r p-8 relative flex flex-col mx-auto bg-white">
                <h1 className="font-bold text-xl text-center">
                  Saya sedang mencari pekerjaan
                </h1>
                <p className="text-sm font-light text-gray-400 pt-4 pb-4 text-center">
                  Buat akun pelamar
                </p>
                <a href="/company/register"
                className="flex justify-center w-full">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full">
                  Mulai melamar
                </button>
                </a>                
                <div className="hidden sm:block absolute right-0 transform translate-x-7 top-1/2 -translate-y-7">
                  <p
                    className="font-bold text-gray-500 rounded-full bg-white flex items-center justify-center text-sm"
                    style={{ height: "50px", width: "50px" }}
                  >
                    or
                  </p>
                </div>
                <div className="sm:hidden absolute transform bottom-0 left-1/2 translate-y-6 -translate-x-7">
                  <p
                    className="font-bold text-gray-500 rounded-full bg-white flex items-center justify-center text-sm"
                    style={{ height: "50px", width: "50px" }}
                  >
                    or
                  </p>
                </div>
              </div>
              <div className="flex flex-col py-8 mx-auto bg-white sm:-ml-8 pl-14 pr-8">
                <h1 className="font-bold text-xl text-center">
                  Saya sedang mencari kandidat
                </h1>
                <p className="text-sm font-light text-gray-400 pt-4 pb-4 text-center">
                  Buat akun perusahaan
                </p>
                <a href="/company/register"
                className="flex justify-center w-full">
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md justify-center hover:bg-green-600 w-full">
                  Mulai merekrut
                </button>
                </a>
              </div>
            </div>
          </div>
        <div className="flex mx-auto">
          <div className="flex flex-col mx-auto">
            <p className="pb-4 text-center">
              Sudah mempunyai akun? 
              <Link to="/user/login" className="text-blue-600"> Masuk</Link>
            </p>
            <p className="text-sm pb-4 text-center">
            Dengan membuat akun Kalibrr, Anda setuju dengan Syarat dan Ketentuan, Kebijakan Privasi, dan persetujuan pengguna kami.
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default SignUp;
