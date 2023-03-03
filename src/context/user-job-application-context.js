import { createContext, useReducer, useContext } from "react";

export const UserJobApplicationContext = createContext();

export const UserJobApplicationProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    id: 0,
    datas: [],
    errorMsg: ""
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
              errorMsg: "",
            };
          }
          case "FETCH_EMPTY": {
            return {
              ...state,
              tag: "empty",
              datas: [],
              errorMsg: "",
            };
          }
          case "FETCH_ERROR": {
            return {
              ...state,
              tag: "error",
              datas: [],
              errorMsg: action.payload,
            };
          }
          default:
            return state;
        }
      }
      case "loaded": {
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
      case "empty": {
        switch (action.type) {
          case "FETCH": {
            return {
              ...state,
              tag: "fetching",
            };
          }
          default:
            return state;
        }
      }
      case "error": {
        switch (action.type) {
          case "FETCH": {
            return {
              ...state,
              tag: "fetching",
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
    <UserJobApplicationContext.Provider value={value}>{children}</UserJobApplicationContext.Provider>
  );
};

export const useUserJobApplicationContext = () => {
  return useContext(UserJobApplicationContext);
};
