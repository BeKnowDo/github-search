import { actionTypes } from "../action-types";

export function url({ url = "" } = {}) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.URL,
      url
    });
  };
}

export function keywords({ keywords = "" } = {}) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.KEYWORDS,
      keywords
    });
  };
}

export function stars({ stars = "" } = {}) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.STARS,
      stars
    });
  };
}

export function license({ license = "" } = {}) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.LICENSE,
      license
    });
  };
}

export function forked({ forked = "" } = {}) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.FORKED,
      forked
    });
  };
}

export function resultPage({ resultPage = 1 } = {}) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.PAGE,
      resultPage
    });
  };
}
