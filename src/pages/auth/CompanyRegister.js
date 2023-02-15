import { Button, Checkbox, Label } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";

const CompanyRegister = () => {
  const { register } = useForm();
  return (
    <PublicLayout>
      <div
        className="bg-cover"
        style={{ backgroundImage: `url("/assets/bgSignup.png")` }}
      >
        <div className="pt-28 pb-12">
          <div className="max-w-[850px] px-10 mx-auto border rounded-lg bg-white py-10">
            <div className="mx-auto mb-10">
              <h1 className="text-center font-semibold text-3xl md:text-5xl">
                Hai Recruiter!
              </h1>
              <p className="text-center text-gray-500 text-base max-w-[650px] mx-auto mt-6">
              Kami ingin mengetahui lebih banyak tentang Anda dan perusahaan Anda sehingga kami 
              dapat menyelesaikan kebutuhan perekrutan Anda bersama-sama.
              </p>
            </div>

            <div className="">
              <p className="font-semibold text-2xl w-[600px] my-5">Informasi Dasar</p>
              <div className="mx-auto">
                <form className="" id="form">
                  <div class="mb-6">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder=""
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="location"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Lokasi
                    </label>
                    <input
                      {...register("location")}
                      type="text"
                      id="location"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder=""
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      E-mail
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kata sandi
                    </label>
                    <input
                      {...register("password")}
                      type="password"
                      id="password"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="password2"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Ulangi kata sandi
                    </label>
                    <input
                      {...register("password2")}
                      type="password"
                      id="password2"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Telepon
                    </label>
                    <input
                      {...register("location")}
                      type="text"
                      id="phone"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="1234-567-890"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="file_input"
                    >
                      Unggah foto perusahaan
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                    />
                  </div>

                  <div class="flex mt-10 mb-5 justify-center items-center">
                    <div className="flex gap-3 items-center">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">
                        Saya telah membaca dan menyetujui Syarat dan Ketentuan,
                        Kebijakan Privasi, dan Persetujuan Pengguna Kalibrr.
                      </Label>
                    </div>
                  </div>
                  <div className="flex justify-center justify-items-center items-center w-full">
                    <Button type="button" className="h-10 w-full">
                      Daftar
                    </Button>
                  </div>

                  <div className="text-center text-sm mt-10">
                    <span>
                      Sudah mempunyai akun perusahaan?
                      <Link
                        to="/company/login"
                        className="text-blue-500 ml-1 hover:underline"
                      >
                        Masuk
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default CompanyRegister;
