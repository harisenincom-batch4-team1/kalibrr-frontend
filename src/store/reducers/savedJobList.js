const initialState = {
  tag: "idle",
  tagDetail: "idle",
  jobDetailId: null,
  savedJobList: [],
  savedJobListDetail: {},
  inputValue: "",
  errorMsg: "",
};

export const savedJobListReducer = (state = initialState, action) => {
  switch (state.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
        default: {
          return state;
        }
      }
    }
    case "loading": {
      switch (action.type) {
        case "FETCH_SUCCESS": {
          return {
            ...state,
            tag: "loaded",
            savedJobList: action.payload,
            errorMsg: "",
          };
        }
        case "FETCH_EMPTY": {
          return {
            ...state,
            tag: "empty",
            savedJobList: [],
            errorMsg: "",
          };
        }
        case "FETCH_ERROR": {
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
    case "loaded": {
      switch (action.type) {
        case "FETCH_DETAIL": {
          return {
            ...state,
            tagDetail: "loading",
            jobDetailId: action.payload,
            errorMsg: "",
          };
        }
      }
    }
  }
  switch (state.tagDetail) {
    case "idle": {
      switch (action.type) {
        case "FETCH_DETAIL": {
          return {
            ...state,
            tagDetail: "loading",
            jobDetailId: action.payload,
          };
        }
        default: {
          return state;
        }
      }
    }
    case "loading": {
      switch (action.type) {
        case "FETCH_DETAIL_SUCCESS": {
          return {
            ...state,
            tagDetail: "loaded",
            savedJobListDetail: action.payload,
            errorMsg: "",
          };
        }
        case "FETCH_DETAIL_ERROR": {
          return {
            ...state,
            tagDetail: "error",
            savedJobListDetail: [],
            errorMsg: action.payload,
          };
        }
        default:
          return state;
      }
    }
    case "loaded": {
      switch (action.type) {
        default:
          return state;
      }
    }
    default:
      return state;
  }
};
