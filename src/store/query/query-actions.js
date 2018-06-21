import { actionTypes } from "../action-types";

export function query({ query = "" } = {}, dispatch) {
  dispatch({
    type: actionTypes.QUERY,
    query
  });
}

export function stars({ stars = "" } = {}, dispatch) {
  dispatch({
    type: actionTypes.QUERY_STARS,
    stars
  });
}

export function license({ license = "" } = {}, dispatch) {
  dispatch({
    type: actionTypes.QUERY_LICENSE,
    license
  });
}

export function forked({ forked = "" } = {}, dispatch) {
  dispatch({
    type: actionTypes.QUERY_FORKED,
    forked
  });
}
