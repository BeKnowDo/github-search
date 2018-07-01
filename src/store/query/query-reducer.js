import { actionTypes } from "../action-types";

const defaultState = {
  url: "",
  keywords: "",
  forked: false,
  license: "",
  stars: "",
  resultPage: 1
};

const url = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.KEYWORDS:
      return {
        ...state,
        keywords: action.keywords
      };

    case actionTypes.URL:
      return {
        ...state,
        url: action.url
      };

    case actionTypes.FORKED:
      return {
        ...state,
        forked: action.forked
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
        resultPage: action.resultPage
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
