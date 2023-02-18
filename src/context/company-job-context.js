import { createContext, useReducer, useContext } from "react";

export const CompanyJobContext = createContext();

export const CompanyJobProvider = ({ children }) => {
  const initialState = {
    tag: "idle",
    id: 0,
    datas: [],
    nameInput: "",
    descriptionInput: "",
    qualificationInput: "",
    errorMsg: "",
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
      case "submitting": {
        switch (action.type) {
          case "SUBMIT_SUCCESS": {
            return {
              ...state,
              tag: "fetching",
              descriptionInput: "",
              qualificationInput: "",
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
      case "editing": {
        switch (action.type) {
          case "EDIT_SUCCESS": {
            return {
              ...state,
              tag: "loaded",
              savedJobList: action.payload,
              errorMsg: "",
            };
          }
          case "EDIT_ERROR": {
            return {
              ...state,
              tag: "error",
              savedJobList: [],
              errorMsg: action.payload,
            };
          }
          default:
            return state;
        }
      }
      case "deleting": {
        switch (action.type) {
          case "DELETE_SUCCESS": {
            return {
              ...state,
              tag: "fetching",
            };
          }
          case "DELETE_ERROR": {
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
      case "delete": {
        switch (action.type) {
          case "DELETE": {
            return {
              ...state,
              tag: "deleting",
            };
          }
          case "CANCEL_DELETE": {
            return {
              ...state,
              tag: "loaded",
            };
          }
          default: {
            return state;
          }
        }
      }
      case "loaded": {
        switch (action.type) {
          case "SUBMIT": {
            return {
              ...state,
              tag: "submitting",
            };
          }
          case "ADD": {
            return {
              ...state,
              tag: "add",
            };
          }
          case "FETCH": {
            return {
              ...state,
              tag: "fetching",
            };
          }
          case "DELETE": {
            return {
              ...state,
              tag: "delete",
              id: action.payload,
            };
          }
          case "CHANGE_NAME": {
            return {
              ...state,
              nameInput: action.payload,
            };
          }
          case "CHANGE_DESCRIPTION": {
            return {
              ...state,
              descriptionInput: action.payload,
            };
          }
          case "CHANGE_QUALIFICATION": {
            return {
              ...state,
              qualificationInput: action.payload,
            };
          }
          default: {
            return state;
          }
        }
      }
      case "empty": {
        switch (action.type) {
          case "SUBMIT": {
            return {
              ...state,
              tag: "submitting",
            };
          }
          case "CHANGE_DESCRIPTION": {
            return {
              ...state,
              descriptionInput: action.payload,
            };
          }
          case "CHANGE_QUALIFICATION": {
            return {
              ...state,
              qualificationInput: action.payload,
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
          case "CHANGE_DESCRIPTION": {
            return {
              ...state,
              descriptionInput: action.payload,
            };
          }
          case "CHANGE_QUALIFICATION": {
            return {
              ...state,
              qualificationInput: action.payload,
            };
          }
          default:
            return state;
        }
      }
      case "add": {
        switch (action.type) {
          case "SUBMIT": {
            return {
              ...state,
              tag: "submitting",
            };
          }
          case "CANCEL_ADD": {
            return {
              ...state,
              tag: "loaded",
            };
          }
          default: {
            return state;
          }
        }
      }
      case "edit": {
        switch (action.type) {
          case "EDIT": {
            return {
              ...state,
              tag: "editing",
            };
          }
          case "CANCEL_EDIT": {
            return {
              ...state,
              tag: "loaded",
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
    <CompanyJobContext.Provider value={value}>
      {children}
    </CompanyJobContext.Provider>
  );
};

export const useCompanyJobContext = () => {
  return useContext(CompanyJobContext);
};
