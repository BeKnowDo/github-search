import { actionTypes } from "../action-types";

export const loaderActions = {
  show: ({ loader = false } = {}, dispatch) => {
    dispatch({
      type: actionTypes.LOADER,
      loader
    });
  }
};
