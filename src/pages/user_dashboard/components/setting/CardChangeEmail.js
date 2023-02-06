import { useEffect, useState } from "react";
import { Button, Card, Label, Spinner, TextInput } from "flowbite-react";
import FullScreen from "../loading/FullScreen";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";

const CardChangeEmail = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const tag = useSelector((state) => state.userSettingReducer.tag);
  const email = useSelector((state) => state.userSettingReducer.email);
  // const tag = useSelector((state) => state.userSettingReducer.tag);
  const progress = useSelector((state) => state.userSettingReducer.progress);
  const emailInput = useSelector(
    (state) => state.userSettingReducer.emailInput
  );
  const currentPasswordInput = useSelector(
    (state) => state.userSettingReducer.currentPasswordInput
  );
  const newPasswordInput = useSelector(
    (state) => state.userSettingReducer.newPasswordInput
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "FETCH_USER_SETTING" });
    axios
      .put(
        process.env.REACT_APP_USER_EMAIL,
        {
          email: emailInput,
          currentPassword: currentPasswordInput,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("kalibrr") },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch({ type: "FETCH_USER_SETTING_SUCCESS" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_USER_SETTING_ERROR", payload: err?.message });
      });
  };

  return (
    <>
      {/* {tag === "loading" && <FullScreen />} */}
      <div className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-gray-200 border">
        <h1
          className={"text-white font-semibold text-lg py-3 px-4 bg-blue-600"}
        >
          Ubah Email
        </h1>
        <div className="bg-white px-4 md:flex gap-5">
          <form
            onSubmit={handleSubmit}
            className="space-y-3 pb-5 md:mt-0 w-full"
          >
            <p className="font-medium border-b-[1px] py-2 md:py-4">
              Alamat email anda sekarang: {email}
            </p>
            <div className="w-full pb-4 space-y-2 border-b-[1px]">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password sekarang" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  required={true}
                  autoComplete="off"
                  disabled={isLoading}
                  value={currentPasswordInput}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CURRENT_PASSWORD",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email baru" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  required={true}
                  autoComplete="off"
                  disabled={isLoading}
                  value={emailInput}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_EMAIL",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-full flex">
              <Button
                type="submit"
                outline={isLoading}
                disabled={isLoading}
                className="ml-auto bg-blue-600 hover:bg-blue-500"
              >
                Simpan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CardChangeEmail;
