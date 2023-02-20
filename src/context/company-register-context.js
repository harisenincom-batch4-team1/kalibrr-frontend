import { createContext, useReducer, useContext } from "react";

export const CompanyRegisterContext = createContext();

export const CompanyRegisterProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    nameInput: "",
    emailInput: "",
    phoneInput: "",
    locationInput: "",
    descriptionInput: "",
    passwordInput: "",
    errorMsg: "",
    isShowPassword: false,
    isSecondStep: false,
    isThirdStep: false,
    firstCode: "",
    secondCode: "",
    thirdCode: "",
    fourthCode: "",
    otp: "",
  };

  const reducer = (state, action) => {
    switch (state.tag) {
      case "idle": {
        switch (action.type) {
          case "NEXT": {
            return {
              ...state,
              tag: "gettingotp",
            };
          }
          case "CHANGE_NAME": {
            return {
              ...state,
              nameInput: action.payload,
            };
          }
          case "CHANGE_EMAIL": {
            return {
              ...state,
              emailInput: action.payload,
            };
          }
          case "CHANGE_PHONE": {
            return {
              ...state,
              phoneInput: action.payload,
            };
          }
          case "CHANGE_LOCATION": {
            return {
              ...state,
              locationInput: action.payload,
            };
          }
          case "CHANGE_DESCRIPTION": {
            return {
              ...state,
              descriptionInput: action.payload,
            };
          }
          case "CHANGE_PASSWORD": {
            return {
              ...state,
              passwordInput: action.payload,
            };
          }
          case "SHOW_PASSWORD": {
            return {
              ...state,
              isShowPassword: action.payload,
            };
          }
          default: {
            return state;
          }
        }
      }
      case "gettingotp": {
        switch (action.type) {
          case "GET_OTP_SUCCESS": {
            return {
              ...state,
              tag: "onotp",
              isSecondStep: true,
            };
          }
          case "GET_OTP_ERROR": {
            return {
              ...state,
              tag: "idle",
              isSecondStep: false,
              errorMsg: action.payload,
            };
          }
          default: {
            return state;
          }
        }
      }
      case "onotp": {
        switch (action.type) {
          case "NEXT": {
            return {
              ...state,
              tag: "checkingotp",
              otp: action.payload,
            };
          }
          case "FIRST_OTP": {
            return {
              ...state,
              firstCode: action.payload,
            };
          }
          case "SECOND_OTP": {
            return {
              ...state,
              secondCode: action.payload,
            };
          }
          case "THIRD_OTP": {
            return {
              ...state,
              thirdCode: action.payload,
            };
          }
          case "FOURTH_OTP": {
            return {
              ...state,
              fourthCode: action.payload,
            };
          }
          default: {
            return state;
          }
        }
      }
      case "checkingotp": {
        switch (action.type) {
          case "CHECK_OTP_SUCCESS": {
            return {
              ...state,
              tag: "confirm",
              isThirdStep: true,
            };
          }
          case "CHECK_OTP_ERROR": {
            return {
              ...state,
              tag: "onotp",
              errorMsg: action.payload
            };
          }
          default: {
            return state;
          }
        }
      }
      case "submitting": {
        switch (action.type) {
          case "SUBMIT_SUCCESS": {
            return {
              ...state,
              tag: "loaded",
              errorMsg: "",
              nameInput: "",
              emailInput: "",
              passwordInput: "",
            };
          }
          case "SUBMIT_ERROR": {
            return {
              ...state,
              tag: "error",
              errorMsg: action.payload,
            };
          }
          default:
            return state;
        }
      }
      case "error": {
        switch (action.type) {
          case "SUBMIT": {
            return {
              ...state,
              tag: "submitting",
            };
          }
          case "CHANGE_NAME": {
            return {
              ...state,
              nameInput: action.payload,
            };
          }
          case "CHANGE_EMAIL": {
            return {
              ...state,
              emailInput: action.payload,
            };
          }
          case "CHANGE_PHONE": {
            return {
              ...state,
              phoneInput: action.payload,
            };
          }
          case "CHANGE_LOCATION": {
            return {
              ...state,
              locationInput: action.payload,
            };
          }
          case "CHANGE_DESCRIPTION": {
            return {
              ...state,
              descriptionInput: action.payload,
            };
          }
          case "CHANGE_PASSWORD": {
            return {
              ...state,
              passwordInput: action.payload,
            };
          }
          case "SHOW_PASSWORD": {
            return {
              ...state,
              isShowPassword: action.payload,
            };
          }
          default:
            return state;
        }
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <CompanyRegisterContext.Provider value={value}>
      {children}
    </CompanyRegisterContext.Provider>
  );
};

export const useCompanyRegisterContext = () => {
  return useContext(CompanyRegisterContext);
};
