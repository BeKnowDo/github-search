import { actionTypes } from "../action-types";

const defaultState = {
  loader: false
};

const loader = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOADER:
      return {
        ...state,
        loader: action.loader
      };
    default:
      return state;
  }
};

export default loader;
