const initialState = {
  tag: "idle",
  user: {},
  nameInput: "",
  locationInput: "",
  roleInput: "",
  skillInput: "",
  phoneInput: "",
  linkedinUrlInput: "",

  //
  emailInput: "",
  currentPasswordInput: "",
  newPasswordInput: "",
  confirmPasswordInput: "",

  //
  errorMessage: "",
};

export default function userReducer(state = initialState, action) {
  switch (state.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH_USER":
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
        case "FETCH_USER_SUCCESS":
          return {
            ...state,
            tag: "loaded",
            user: action.payload,
            nameInput: "",
            locationInput: "",
            roleInput: "",
            skillInput: "",
            phoneInput: "",
            linkedinUrlInput: "",
            emailInput: "",
            currentPasswordInput: "",
            newPasswordInput: "",
            confirmPasswordInput: "",
            errorMessage: "",
          };
        case "FETCH_USER_ERROR":
          return {
            ...state,
            tag: "error",
            errorMessage: action.payload,
          };
        default:
          return state;
      }
    }
    case "loaded": {
      switch (action.type) {
        case "CHANGE_INPUT_NAME":
          return {
            ...state,
            nameInput: action.payload,
          };
        case "CHANGE_INPUT_EMAIL":
          return {
            ...state,
            emailInput: action.payload,
          };
        case "CHANGE_INPUT_CURRENT_PASSWORD":
          return {
            ...state,
            currentPasswordInput: action.payload,
          };
        case "CHANGE_INPUT_NEW_PASSWORD":
          return {
            ...state,
            newPasswordInput: action.payload,
          };
        case "CHANGE_INPUT_CONFIRM_PASSWORD":
          return {
            ...state,
            confirmPasswordInput: action.payload,
          };
        case "FETCH_USER":
          return {
            ...state,
            tag: "loading",
          };
        case "EDIT_USER":
          return {
            ...state,
            tag: "edit",
          };
        default:
          return state;
      }
    }
    case "error": {
      switch (action.type) {
        case "CHANGE_INPUT_EMAIL":
          return {
            ...state,
            emailInput: action.payload,
          };
        case "CHANGE_INPUT_CURRENT_PASSWORD":
          return {
            ...state,
            currentPasswordInput: action.payload,
          };
        case "CHANGE_INPUT_NEW_PASSWORD":
          return {
            ...state,
            newPasswordInput: action.payload,
          };
        case "CHANGE_INPUT_CONFIRM_PASSWORD":
          return {
            ...state,
            confirmPasswordInput: action.payload,
          };
        case "FETCH_USER":
          return {
            ...state,
            tag: "loading",
          };
        case "EDIT_USER":
          return {
            ...state,
            tag: "edit",
          };
        default:
          return state;
      }
    }
    case "edit": {
      switch (action.type) {
        case "CHANGE_INPUT_NAME":
          return {
            ...state,
            nameInput: action.payload,
          };
        case "CHANGE_INPUT_LOCATION":
          return {
            ...state,
            locationInput: action.payload,
          };
        case "CHANGE_INPUT_ROLE":
          return {
            ...state,
            roleInput: action.payload,
          };
        case "CHANGE_INPUT_SKILL":
          return {
            ...state,
            skillInput: action.payload,
          };
        case "CHANGE_INPUT_PHONE":
          return {
            ...state,
            phoneInput: action.payload,
          };
        case "CHANGE_INPUT_LINKEDINURL":
          return {
            ...state,
            linkedinUrlInput: action.payload,
          };
        case "FETCH_USER":
          return {
            ...state,
            tag: "loading",
          };
        case "CANCEL_EDIT_USER":
          return {
            ...state,
            tag: "loaded",
          };
        default:
          return state;
      }
    }
    default:
      return state;
  }
}
