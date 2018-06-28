import { actionTypes } from "../action-types";

export function url({ url = "" } = {}, dispatch) {
  dispatch({
    type: actionTypes.URL,
    url
  });
}

export function keywords({ keywords = "" } = {}, dispatch) {
  dispatch({
    type: actionTypes.KEYWORDS,
    keywords
  });
}

export function stars({ stars = "" } = {}, dispatch) {
  dispatch({
    type: actionTypes.STARS,
    stars
  });
}

export function license({ license = "" } = {}, dispatch) {
  dispatch({
    type: actionTypes.LICENSE,
    license
  });
}

export function forked({ forked = "" } = {}, dispatch) {
  dispatch({
    type: actionTypes.FORKED,
    forked
  });
}

export function result_page({ result_page = 1 } = {}, dispatch) {
  dispatch({
    type: actionTypes.PAGE,
    result_page
  });
}
