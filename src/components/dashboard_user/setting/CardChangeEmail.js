import { Button, Card, Label, Spinner, TextInput } from "flowbite-react";
import axios from "axios";
import Cookies from "js-cookie";
import { useUserSettingContext } from "../../../context/user-setting-context";
import { userEmailApi } from "../../../api";

const CardChangeEmail = () => {
  const { state, dispatch } = useUserSettingContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "FETCH_USER_SETTING" });
    axios
      .put(
        userEmailApi,
        {
          email: state.emailInput,
          currentPassword: state.currentPasswordInput,
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
              Alamat email anda sekarang: {state.email}
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
