import { createContext, useReducer, useContext } from "react";

export const UserLoginContext = createContext();

export const UserLoginProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    emailInput: "",
    passwordInput: "",
    errorMsg: "",
    isShowPassword: false,
  };

  const reducer = (state, action) => {
    switch (state.tag) {
      case "idle": {
        switch (action.type) {
          case "SUBMIT": {
            return {
              ...state,
              tag: "submitting",
            };
          }
          case "CHANGE_EMAIL": {
            return {
              ...state,
              emailInput: action.payload,
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
      case "submitting": {
        switch (action.type) {
          case "SUBMIT_SUCCESS": {
            return {
              ...state,
              tag: "loaded",
              errorMsg: "",
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
          case "CHANGE_EMAIL": {
            return {
              ...state,
              emailInput: action.payload,
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
    <UserLoginContext.Provider value={value}>
      {children}
    </UserLoginContext.Provider>
  );
};

export const useUserLoginContext = () => {
  return useContext(UserLoginContext);
};
