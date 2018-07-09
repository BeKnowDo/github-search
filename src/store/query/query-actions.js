import { actionTypes } from "../action-types";

// q = is query

const urlAction = url => ({
  type: actionTypes.URL,
  url
});

const qAction = q => ({
  type: actionTypes.Q,
  q
});

const starsAction = stars => ({
  type: actionTypes.STARS,
  stars
});

const licenseAction = license => ({
  type: actionTypes.LICENSE,
  license
});

const forkAction = fork => ({
  type: actionTypes.FORK,
  fork
});

const pageAction = page => ({
  type: actionTypes.PAGE,
  page
});

export function url(url) {
  return dispatch => {
    dispatch(urlAction(url));
  };
}

export function q(q) {
  return dispatch => {
    dispatch(qAction(q));
  };
}

export function stars(stars) {
  return dispatch => {
    dispatch(starsAction(stars));
  };
}
export function license(license) {
  return dispatch => {
    dispatch(licenseAction(license));
  };
}

export function fork(fork) {
  return dispatch => {
    dispatch(forkAction(fork));
  };
}

export function page(page) {
  return dispatch => {
    dispatch(pageAction(page));
  };
}
