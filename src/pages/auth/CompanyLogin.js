import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PublicLayout from "../../layouts/PublicLayout";

const CompanyLogin = () => {
  const [isHidden, setIsHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <PublicLayout>
      <Helmet>
        <title>Masuk sebagai Perusahaan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <div
        className="bg-cover pt-20 lg:pt-40 pb-24 lg:pb-40 px-2"
        style={{ backgroundImage: `url("/assets/bgSignup.webp")` }}
      >
        <div className="max-w-[550px] p-10 items-center justify-center mx-auto mt-14 border-gray-300 rounded-lg bg-[#f7f9fb] h-fit">
          {/* login */}
          <div className="mb-5">
            <div className="text-center text-2xl mb-5">
              <p>Login Kalibrr</p>
              <p>Sebagai Perusahaan</p>
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
                  autoComplete="off"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <label>Password</label>
                </div>
                {/* password */}
                <div className="flex flex-row relative items-center">
                  <div className="basis-full">
                    <TextInput
                      id="password"
                      type={isHidden ? "password" : "text"}
                      placeholder="Password"
                      required={true}
                    />
                  </div>
                  <div className="absolute right-5 opacity-50 cursor-pointer">
                    {isHidden ? (
                      <FaEyeSlash
                        size={25}
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <FaEye size={25} onClick={togglePasswordVisibility} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="flex gap-3">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Ingat saya</Label>
                </div>

                <a href="#!" className="text-blue-600">
                  Lupa password?
                </a>
              </div>
              <Button type="submit">Login</Button>
            </form>
          </div>

          {/* register */}
          <div className="text-center text-sm mt-3">
            <span>
              Belum punya akun?
              <Link to="/signup" className="text-blue-500 ml-1 hover:underline">
                Daftar
              </Link>
            </span>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default CompanyLogin;
