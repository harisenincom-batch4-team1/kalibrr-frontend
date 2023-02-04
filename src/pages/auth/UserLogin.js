import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {
  FaApple,
  FaEye,
  FaEyeSlash,
  FaFacebookSquare,
  FaGoogle,
} from "react-icons/fa";

const UserLogin = () => {
  const [isHidden, setIsHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <div className="flex bg-stone-100">
      <div className="w-[550px] items-center justify-center px-6 py-5 mx-auto mt-14 border-gray-300 rounded-sm bg-white">
        {/* login */}
        <div className="m-5">
          <div className="text-center text-2xl mb-5">
            <span>Masuk ke Kalibrr</span>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <label>Email</label>
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="me@example.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <label>Kata Sandi</label>
              </div>
              {/* password */}
              <div className="flex flex-row relative items-center">
                <div className="basis-full">
                  <TextInput
                    id="password"
                    type={isHidden ? "password" : "text"}
                    placeholder="Kata Sandi"
                    required={true}
                  />
                </div>
                <div className="absolute right-5 opacity-50 cursor-pointer">
                  {isHidden ? (
                    <FaEyeSlash size={25} onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye size={25} onClick={togglePasswordVisibility} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-3">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Ingat Saya</Label>
              </div>

              <a href="#!" className="text-blue-600">
                Lupa kata sandi?
              </a>
            </div>
            <Button type="submit">MASUK</Button>
          </form>
        </div>

        {/* divide */}
        <div class="flex items-center my-4 mx-5 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p class="text-center mx-4 mb-0">atau</p>
        </div>

        {/* alternative login */}
        <div className="mx-5">
          <div className="flex flex-col gap-4">
            <button
              className="bg-blue-900 rounded-md py-2 text-white text-base w-full"
              type="submit"
            >
              <span className="flex flex-row ml-2">
                <FaFacebookSquare size={25} />{" "}
                <text className="mx-auto">MASUK DENGAN FACEBOOK</text>
              </span>
            </button>

            <button
              className="bg-blue-600 rounded-md py-2 text-white text-base"
              type="submit"
            >
              <span className="flex flex-row ml-2">
                <FaGoogle size={25} />{" "}
                <text className="mx-auto">MASUK DENGAN GOOGLE</text>
              </span>
            </button>

            <button
              className="bg-black rounded-md py-2 text-white text-base"
              type="submit"
            >
              <span className="flex flex-row ml-2">
                <FaApple size={25} />{" "}
                <text className="mx-auto">MASUK DENGAN APPLE</text>
              </span>
            </button>
          </div>
        </div>

        {/* register */}
        <div className="text-center text-sm mt-3">
          <span>
            Belum mempunyai akun Kalibrr?
            <Link to="/signup" className="text-blue-500 ml-1 hover:underline">
              Daftar
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
