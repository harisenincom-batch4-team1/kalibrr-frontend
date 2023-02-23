import { createContext, useReducer, useContext } from "react";

export const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    datas: {},
    nameInput: "",
    emailInput: "",
    locationInput: "",
    roleInput: "",
    skillInput: "",
    phoneInput: "",
    errorMessage: "",
  };

  const reducer = (state, action) => {
    switch (state.tag) {
      case "idle": {
        switch (action.type) {
          case "FETCH": {
            return {
              ...state,
              tag: "fetching",
            };
          }
          default: {
            return state;
          }
        }
      }
      case "fetching": {
        switch (action.type) {
          case "FETCH_SUCCESS": {
            return {
              ...state,
              tag: "loaded",
              datas: action.payload,
              nameInput: "",
              locationInput: "",
              roleInput: "",
              skillInput: "",
              phoneInput: "",
              emailInput: "",
              errorMessage: "",
            };
          }
          case "FETCH_ERROR": {
            return {
              ...state,
              tag: "error",
              errorMessage: action.payload,
            };
          }
          default: {
            return state;
          }
        }
      }
      case "loaded": {
        switch (action.type) {
          case "EDIT": {
            return {
              ...state,
              tag: "editing",
            };
          }
          default: {
            return state;
          }
        }
      }
      case "editing": {
        switch (action.type) {
          case "CANCEL_EDIT": {
            return {
              ...state,
              tag: "loaded",
            };
          }
          case "CHANGE_NAME": {
            return {
              ...state,
              nameInput: action.payload,
            };
          }
          case "CHANGE_PHONE": {
            return {
              ...state,
              phoneInput: action.payload,
            };
          }
          case "CHANGE_EMAIL": {
            return {
              ...state,
              emailInput: action.payload,
            };
          }
          case "CHANGE_LOCATION": {
            return {
              ...state,
              locationInput: action.payload,
            };
          }
          case "CHANGE_ROLE": {
            return {
              ...state,
              roleInput: action.payload,
            };
          }
          case "CHANGE_LINKEDIN": {
            return {
              ...state,
              linkedinUrlInput: action.payload,
            };
          }
          case "CHANGE_SKILL": {
            return {
              ...state,
              skillInput: action.payload,
            };
          }
          case "SUBMIT": {
            return {
              ...state,
              tag: "submitting",
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
              tag: "fetching",
            };
          }
          case "SUBMIT_ERROR": {
            return {
              ...state,
              tag: "error",
            };
          }
          default: {
            return state;
          }
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
          case "FETCH": {
            return {
              ...state,
              tag: "fetching",
            };
          }
          default: {
            return state;
          }
        }
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const value = { state, dispatch };

  return <UserProfileContext.Provider value={value}>{children}</UserProfileContext.Provider>;
};

export const useUserProfileContext = () => {
  return useContext(UserProfileContext);
};
