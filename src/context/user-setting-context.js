import { createContext, useReducer, useContext } from "react";

export const UserSettingContext = createContext();

export const UserSettingProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    email: "",
    emailInput: "",
    currentPasswordInput: "",
    newPasswordInput: "",
    confirmPasswordInput: "",
    errorMsg: "",
    progress: 0,
  };

  function reducer(state = initialState, action) {
    switch (state.tag) {
      case "idle": {
        switch (action.type) {
          case "FETCH_USER_SETTING":
            return {
              ...state,
              tag: "loading",
            };
          default:
            return state;
        }
      }
      case "loading": {
        switch (action.type) {
          case "FETCH_USER_SETTING_SUCCESS":
            return {
              ...state,
              tag: "loaded",
              email: action.payload,
              emailInput: "",
              currentPasswordInput: "",
              newPasswordInput: "",
              confirmPasswordInput: "",
              errorMsg: "",
              progress: action.payload,
            };
          case "FETCH_USER_SETTING_ERROR":
            return {
              ...state,
              tag: "error",
              errorMsg: action.payload,
            };
          default:
            return state;
        }
      }
      case "loaded": {
        switch (action.type) {
          case "CHANGE_EMAIL":
            return {
              ...state,
              emailInput: action.payload,
            };
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
          case "FETCH_USER_SETTING":
            return {
              ...state,
              tag: "loading",
              progress: action.payload,
            };
          default:
            return state;
        }
      }
      case "error": {
        switch (action.type) {
          case "CHANGE_EMAIL":
            return {
              ...state,
              emailInput: action.payload,
            };
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
          case "FETCH_USER_SETTING":
            return {
              ...state,
              tag: "loading",
            };
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
