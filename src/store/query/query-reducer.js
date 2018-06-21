import { actionTypes } from "../action-types";

const defaultState = {
  query: "",
  forked: false,
  license: "",
  stars: ""
};

const query = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.QUERY:
      return {
        ...state,
        query: action.query,
        loader: true
      };
    case actionTypes.QUERY_FORKED:
      return {
        ...state,
        forked: action.forked,
        loader: true
      };
    case actionTypes.QUERY_LICENSE:
      return {
        ...state,
        license: action.license,
        loader: true
      };
    case actionTypes.QUERY_STARS:
      return {
        ...state,
        stars: action.stars,
        loader: true
      };

    case actionTypes.LOADER:
      return { ...state, loader: true };

    case actionTypes.RESET:
      return {
        ...state,
        loader: false,
        query: "",
        stars: "",
        license: "",
        forked: false
      };
    default:
      return state;
  }
};

export default query;
