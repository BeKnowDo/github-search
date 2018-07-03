import { actionTypes } from "../action-types";

const urlAction = url => {
  return {
    type: actionTypes.URL,
    url
  };
};

const keywordsAction = keywords => {
  return {
    type: actionTypes.KEYWORDS,
    keywords
  };
};

const starsAction = stars => {
  return {
    type: actionTypes.STARS,
    stars
  };
};

const licenseAction = license => {
  return {
    type: actionTypes.LICENSE,
    license
  };
};

const forkedAction = forked => {
  return {
    type: actionTypes.FORKED,
    forked
  };
};

const resultPageAction = resultPage => {
  return {
    type: actionTypes.PAGE,
    resultPage
  };
};

export function url({ url = "" } = {}) {
  return dispatch => {
    dispatch(urlAction(url));
  };
}

export function keywords({ keywords = "" } = {}) {
  return dispatch => {
    dispatch(keywordsAction(keywords));
  };
}

export function stars({ stars = "" } = {}) {
  return dispatch => {
    dispatch(starsAction(stars));
  };
}
export function license({ license = "" } = {}) {
  return dispatch => {
    dispatch(licenseAction(license));
  };
}

export function forked({ forked = "" } = {}) {
  return dispatch => {
    dispatch(forkedAction(forked));
  };
}

export function resultPage({ resultPage = 1 } = {}) {
  return dispatch => {
    dispatch(resultPageAction(resultPage));
  };
}
