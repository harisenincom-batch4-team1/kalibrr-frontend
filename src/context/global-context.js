import { createContext, useReducer, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    isLogin: false,
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
              isLogin: action.payload,
            };
          }
          default:
            return state;
        }
      }
      case "loaded":
        switch (action.type) {
          case "FETCH": {
            return {
              ...state,
              tag: "fetching",
            };
          }
          case "DELETE": {
            return {
              ...state,
              tag: "idle",
              isLogin: false
            };
          }
          default: {
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
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
