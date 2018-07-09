import { actionTypes } from "../action-types";

const defaultState = {
  url: "",
  q: "",
  fork: false,
  license: "",
  stars: "",
  page: 1,
  per_page: "10"
};

const url = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.Q:
      return {
        ...state,
        q: action.q
      };

    case actionTypes.URL:
      return {
        ...state,
        url: action.url
      };

    case actionTypes.FORK:
      return {
        ...state,
        fork: action.fork
      };
    case actionTypes.LICENSE:
      return {
        ...state,
        license: action.license
      };
    case actionTypes.STARS:
      return {
        ...state,
        stars: action.stars
      };
    case actionTypes.PAGE:
      return {
        ...state,
        page: action.page
      };

    case actionTypes.LOADER:
      return {
        ...state
      };

    case actionTypes.RESET:
      return {
        ...defaultState
      };
    default:
      return state;
  }
};

export default url;
