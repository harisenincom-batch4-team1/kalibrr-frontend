import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useUserRegisterContext } from "../../context/user-register-context";
import { userRegisterApi } from "../../api";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PublicLayout from "../../layouts/PublicLayout";
import axios from "axios";
import Cookies from "js-cookie";

const UserRegister = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useUserRegisterContext();
  const { nameInput, emailInput, passwordInput } = state;
  const [isHidden, setIsHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsHidden((prevState) => !prevState);
  };

  useEffect(() => {
    switch (state.tag) {
      case "submitting":
        axios
          .post(userRegisterApi, {
            name: nameInput,
            email: emailInput,
            password: passwordInput,
          })
          .then(() => {
            dispatch({ type: "SUBMIT_SUCCESS" });
          })
          .catch((err) => {
            console.log(err?.message);
            dispatch({ type: "SUBMIT_ERROR", payload: err?.message });
          });
        break;
      case "loaded":
        setTimeout(() => {
          navigate("/user/login");
        }, 500);
        break;
      default:
        break;
    }
  }, [state.tag]);

  return (
    <PublicLayout>
      <div className="flex bg-stone-100 h-screen w-full items-center">
        <div className="w-[550px] h-fit items-center justify-center px-6 py-5 mx-auto border rounded-md border-gray-200 bg-white">
          {/* register */}
          <div className="flex flex-col gap-5">
            <div className="text-center text-2xl my-3">
              <span>Daftar</span>
            </div>
            <form className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block">Nama Lengkap</label>
                <TextInput
                  value={nameInput}
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_NAME", payload: e.target.value })
                  }
                  id="name"
                  type="text"
                  placeholder="Nama Lengkap"
                  required
                  autoComplete="off"
                />
              </div>
              {/* Email */}
              <div>
                <label className="mb-2 block">Email</label>
                <TextInput
                  value={state.emailInput}
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_EMAIL", payload: e.target.value })
                  }
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                />
              </div>
              {/* password */}
              <div className="flex flex-row relative items-center">
                <div className="basis-full">
                  <label className="mb-2 block">Kata Sandi</label>
                  <TextInput
                    value={state.passwordInput}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_PASSWORD",
                        payload: e.target.value,
                      })
                    }
                    id="password"
                    type={isHidden ? "password" : "text"}
                    placeholder="Kata Sandi"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="absolute bottom-2 right-5 opacity-50 cursor-pointer">
                  {isHidden ? (
                    <FaEyeSlash size={25} onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye size={25} onClick={togglePasswordVisibility} />
                  )}
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">
                    Saya telah membaca dan menyetujui Syarat dan Ketentuan,
                    Kebijakan Privasi, dan Persetujuan Pengguna Kalibrr.
                  </Label>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => dispatch({ type: "SUBMIT" })}
                className="h-10"
              >
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
    </PublicLayout>
  );
};

export default UserRegister;
