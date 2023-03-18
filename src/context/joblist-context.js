import { createContext, useReducer, useContext } from "react";

export const JobListContext = createContext();

export const JobListProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    id: 0,
    datas: {},
    inputValue: "",
    errorMsg: "",
    page: 0,
    limit: 10,
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
          case "CHANGE_INPUT": {
            return {
              ...state,
              inputValue: action.payload,
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
              datas: {},
              errorMsg: "",
            };
          }
          case "FETCH_ERROR": {
            return {
              ...state,
              tag: "error",
              datas: {},
              errorMsg: action.payload,
            };
          }
          default:
            return state;
        }
      }
      case "loaded": {
        switch (action.type) {
          case "CHANGE_INPUT": {
            return {
              ...state,
              inputValue: action.payload,
            };
          }
          case "FETCH": {
            return {
              ...state,
              tag: "fetching",
              page: action.payload,
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
          case "SUBMIT": {
            return {
              ...state,
              tag: "submitting",
              inputValue: action.payload,
            };
          }
          case "CHANGE_INPUT": {
            return {
              ...state,
              inputValue: action.payload,
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
          case "SUBMIT": {
            return {
              ...state,
              tag: "submitting",
              inputValue: action.payload,
            };
          }
          case "CHANGE_INPUT": {
            return {
              ...state,
              inputValue: action.payload,
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
    <JobListContext.Provider value={value}>{children}</JobListContext.Provider>
  );
};

export const useJobListContext = () => {
  return useContext(JobListContext);
};
