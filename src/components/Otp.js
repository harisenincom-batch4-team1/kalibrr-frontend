import { Button } from "flowbite-react";
import { useCompanyRegisterContext } from "context";
import { Spinner } from "components";

export const Otp = () => {
  const { state, dispatch } = useCompanyRegisterContext();

  const handleCheckOtp = () => {
    dispatch({
      type: "NEXT",
      payload:
        state.firstCode + state.secondCode + state.thirdCode + state.fourthCode,
    });
  };

  return (
    <div className="mx-auto flex w-full flex-col space-y-16 mt-16">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div className="font-semibold text-3xl">
          <p>Verifikasi Email</p>
        </div>
        <div className="flex flex-row text-sm font-medium text-gray-400">
          <p>Kalibrr telah mengirimkan kode OTP ke email {state.emailInput}</p>
        </div>
      </div>
      <div>
        <form action="" method="post">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div className="w-16 h-16 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name="first"
                  id="fisrt"
                  autoComplete="off"
                  minLength={0}
                  maxLength={1}
                  value={state.firstCode}
                  onChange={(e) =>
                    dispatch({ type: "FIRST_OTP", payload: e.target.value })
                  }
                />
              </div>
              <div className="w-16 h-16 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name="second"
                  id="second"
                  autoComplete="off"
                  minLength={0}
                  maxLength={1}
                  value={state.secondCode}
                  onChange={(e) =>
                    dispatch({ type: "SECOND_OTP", payload: e.target.value })
                  }
                />
              </div>
              <div className="w-16 h-16 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name="third"
                  id="third"
                  autoComplete="off"
                  minLength={0}
                  maxLength={1}
                  value={state.thirdCode}
                  onChange={(e) =>
                    dispatch({ type: "THIRD_OTP", payload: e.target.value })
                  }
                />
              </div>
              <div className="w-16 h-16 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name="fourth"
                  id="fourth"
                  autoComplete="off"
                  minLength={0}
                  maxLength={1}
                  value={state.fourthCode}
                  onChange={(e) =>
                    dispatch({ type: "FOURTH_OTP", payload: e.target.value })
                  }
                />
              </div>
            </div>
            <span className="mb-2 -mt-1 text-xs md:text-sm text-red-600 mx-auto text-center">
              {state.errorOtpMsg}
            </span>
            <div className="flex flex-col space-y-5">
              <div>
                <Button
                  className="w-full max-w-xs mx-auto"
                  onClick={handleCheckOtp}
                  disabled={state.tag === "checkingotp"}
                >
                  {state.tag === "checkingotp" ? <Spinner /> : "Verifikasi"}
                </Button>
              </div>
              {/* <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p>{" "}
                <a
                  className="flex flex-row items-center text-blue-600"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resend
                </a>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
