import { actionTypes } from "../action-types";

const defaultState = {
  results: []
};
const results = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.RESULTS:
      return {
        ...state,
        results: action.results
      };
    default:
      return state;
  }
};

export default results;
