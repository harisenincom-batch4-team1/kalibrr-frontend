import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import HideShowPassword from "../../helper/HideShowPassword";

const UserRegister = () => {
  return (
    <div className="flex bg-stone-100">
      <div className="w-[550px] h-fit items-center justify-center px-6 py-5 mx-auto mt-14 border-gray-300 rounded-sm bg-white">
        {/* register */}
        <div className="flex flex-col gap-5">
          <div className="text-center text-2xl my-3">
            <span>Daftar</span>
          </div>
          <form className="flex flex-col gap-8">
            <div className="flex flex-row gap-3">
              <TextInput
                className="basis-1/2"
                id="namadepan"
                type="text"
                placeholder="Nama Depan"
                required={true}
              />

              <TextInput
                className="basis-1/2"
                id="namabelakang"
                type="text"
                placeholder="Nama Belakang"
                required={true}
              />
            </div>

            <div>
              <TextInput
                id="email"
                type="email"
                placeholder="Email"
                required={true}
              />
            </div>

            {/* password */}
            <HideShowPassword />
            <div>
              <div className="flex gap-3">
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                  Saya telah membaca dan menyetujui Syarat dan Ketentuan,
                  Kebijakan Privasi, dan Persetujuan Pengguna Kalibrr.
                </Label>
              </div>
            </div>

            <Button type="submit" disabled>
              Daftar
            </Button>
          </form>

          {/* have a acoount */}
          <div className="text-center text-sm mb-8">
            <span>
              Sudah mempunyai akun?
              <Link
                to="/user/login"
                className="text-blue-500 ml-1 hover:underline"
              >
                Masuk
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
