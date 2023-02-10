import { createContext, useReducer, useContext } from "react";

export const UserRegisterContext = createContext();

export const UserRegisterProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    nameInput: "",
    emailInput: "",
    passwordInput: "",
    errorMsg: "",
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
          case "CHANGE_PASSWORD": {
            return {
              ...state,
              passwordInput: action.payload,
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
      case "loaded": {
        switch (action.type) {
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
          case "CHANGE_PASSWORD": {
            return {
              ...state,
              passwordInput: action.payload,
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
    <UserRegisterContext.Provider value={value}>
      {children}
    </UserRegisterContext.Provider>
  );
};

export const useUserRegisterContext = () => {
  return useContext(UserRegisterContext);
};
