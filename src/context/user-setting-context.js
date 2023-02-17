import { createContext, useReducer, useContext } from "react";

export const UserSettingContext = createContext();

export const UserSettingProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    currentPasswordInput: "",
    newPasswordInput: "",
    confirmPasswordInput: "",
    errorMsg: "",
    isShowPasswordCurrent: false,
    isShowPasswordnew: false,
    isShowPasswordConfirm: false,
  };

  function reducer(state, action) {
    switch (state.tag) {
      case "idle": {
        switch (action.type) {
          case "CHANGE_CURRENT_PASSWORD":
            return {
              ...state,
              currentPasswordInput: action.payload,
            };
          case "CHANGE_NEW_PASSWORD":
            return {
              ...state,
              newPasswordInput: action.payload,
            };
          case "CHANGE_CONFIRM_PASSWORD":
            return {
              ...state,
              confirmPasswordInput: action.payload,
            };
          case "SUBMIT":
            return {
              ...state,
              tag: "submitting",
            };
          case "SHOW_PASSWORD_CURRENT": {
            return {
              ...state,
              isShowPasswordCurrent: action.payload,
            };
          }
          case "SHOW_PASSWORD_NEW": {
            return {
              ...state,
              isShowPasswordNew: action.payload,
            };
          }
          case "SHOW_PASSWORD_CONFIRM": {
            return {
              ...state,
              isShowPasswordConfirm: action.payload,
            };
          }
          default:
            return state;
        }
      }
      case "submitting": {
        switch (action.type) {
          case "SUBMIT_SUCCESS":
            return {
              ...state,
              tag: "idle",
              currentPasswordInput: "",
              newPasswordInput: "",
              confirmPasswordInput: "",
              errorMsg: "",
            };
          case "SUBMIT_ERROR":
            return {
              ...state,
              tag: "error",
              errorMsg: action.payload,
            };
          default:
            return state;
        }
      }
      case "error": {
        switch (action.type) {
          case "CHANGE_CURRENT_PASSWORD":
            return {
              ...state,
              currentPasswordInput: action.payload,
            };
          case "CHANGE_NEW_PASSWORD":
            return {
              ...state,
              newPasswordInput: action.payload,
            };
          case "CHANGE_CONFIRM_PASSWORD":
            return {
              ...state,
              confirmPasswordInput: action.payload,
            };
          case "SUBMIT":
            return {
              ...state,
              tag: "submitting",
            };
          case "SHOW_PASSWORD_CURRENT": {
            return {
              ...state,
              isShowPasswordCurrent: action.payload,
            };
          }
          case "SHOW_PASSWORD_NEW": {
            return {
              ...state,
              isShowPasswordNew: action.payload,
            };
          }
          case "SHOW_PASSWORD_CONFIRM": {
            return {
              ...state,
              isShowPasswordConfirm: action.payload,
            };
          }
          default:
            return state;
        }
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <UserSettingContext.Provider value={value}>
      {children}
    </UserSettingContext.Provider>
  );
};

export const useUserSettingContext = () => {
  return useContext(UserSettingContext);
};
