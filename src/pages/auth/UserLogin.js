import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoginApi } from "../../api";
import { useUserLoginContext } from "../../context/user-login-context";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import Spinner from "../../components/Spinner";
import PublicLayout from "../../layouts/PublicLayout";

const UserLogin = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useUserLoginContext();
  const { emailInput, passwordInput } = state;
  const [isHidden, setIsHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsHidden((prevState) => !prevState);
  };

  useEffect(() => {
    switch (state.tag) {
      case "submitting":
        axios
          .post(userLoginApi, {
            email: emailInput,
            password: passwordInput,
          })
          .then((res) => {
            Cookies.set("kalibrr", res.data.datas);
            dispatch({ type: "SUBMIT_SUCCESS" });
          })
          .catch((err) =>
            dispatch({ type: "SUBMIT_ERROR", payload: err?.message })
          );
        break;
      case "loaded":
        setTimeout(() => {
          navigate("/user/dashboard/profile");
        }, 500);
        break;
      default:
        break;
    }
  }, [state.tag]);

  return (
    <PublicLayout>
      <div className="flex w-full h-screen items-center bg-stone-100 px-5">
        <div className="w-[500px] items-center justify-center mb-40 px-6 py-5 mx-auto mt-14 border-gray-200 border rounded-sm bg-white">
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
                  value={state.emailInput}
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_EMAIL", payload: e.target.value })
                  }
                  type="email"
                  placeholder="yourname@mail.com"
                  required={true}
                  autoComplete="off"
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
                      required={true}
                      autoComplete="off"
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
                <div className="flex gap-3 items-center">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Ingat Saya</Label>
                </div>

                <a href="#!" className="text-blue-600">
                  Lupa kata sandi?
                </a>
              </div>
              <Button
                type="button"
                onClick={() => dispatch({ type: "SUBMIT" })}
                className="h-10"
              >
                {state.tag === "submitting" ? <Spinner /> : "Masuk"}
              </Button>
            </form>
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
    </PublicLayout>
  );
};

export default UserLogin;
