const initialState = {
  tag: "idle",
  email: "",
  emailInput: "",
  currentPasswordInput: "",
  newPasswordInput: "",
  confirmPasswordInput: "",
  errorMsg: "",
  progress: 0
};

export default function userSettingReducer(state = initialState, action) {
  switch (state.tag) {
    case "idle":
      switch (action.type) {
        case "FETCH_USER_SETTING":
          return {
            ...state,
            tag: "loading",
          };
        default:
          return state;
      }
    case "loading":
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
            progress: action.payload
          };
        case "FETCH_USER_SETTING_ERROR":
          return {
            ...state,
            tag: "error",
            errorMsg: action.payload,
          };
      }
    case "loaded":
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
            progress: action.payload
          };
      }
    case "error":
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
      }
    default:
      return state;
  }
}
