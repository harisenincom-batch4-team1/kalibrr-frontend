import { createContext, useReducer, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    isLogin: false,
    isLoginCompany: false,
    datas: {},
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
              isLogin: action.payload.isLogin,
              isLoginCompany: action.payload.isLoginCompany,
            };
          }
          default:
            return state;
        }
      }
      case "fetching_user": {
        switch (action.type) {
          case "FETCH_USER_SUCCESS": {
            return {
              ...state,
              tag: "loaded",
              datas: action.payload.datas,
              isLogin: true,
            };
          }
          case "LOGOUT": {
            return {
              ...state,
              tag: "loaded",
              datas: {},
              isLogin: false,
            };
          }
          default: {
            return state;
          }
        }
      }
      case "fetching_company": {
        switch (action.type) {
          case "FETCH_COMPANY_SUCCESS": {
            return {
              ...state,
              tag: "loaded",
              datas: action.payload.datas,
              isLoginCompany: true,
            };
          }
          case "LOGOUT": {
            return {
              ...state,
              tag: "loaded",
              datas: {},
              isLoginCompany: false,
            };
          }
          default: {
            return state;
          }
        }
      }
      case "loaded": {
        switch (action.type) {
          case "FETCH_USER": {
            return {
              ...state,
              tag: "fetching_user",
            };
          }
          case "FETCH_COMPANY": {
            return {
              ...state,
              tag: "fetching_company",
            };
          }
          case "DELETE": {
            return {
              ...state,
              tag: "idle",
              isLogin: false,
              isLoginCompany: false,
            };
          }
          case "LOGOUT": {
            return {
              ...state,
              isLogin: false,
              isLoginCompany: false,
              datas: {},
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

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
