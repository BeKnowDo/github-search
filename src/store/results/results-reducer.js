import { actionTypes } from "../action-types";

const defaultState = {
  results: [],
  loader: false
};
const results = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESULTS:
      return {
        ...state,
        results: action.results
      };
    default:
      return state;
  }
};

export default results;
