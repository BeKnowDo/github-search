import { actionTypes } from "../action-types";

// q = is query

const url = url => ({
  type: actionTypes.URL,
  url
});

const q = q => ({
  type: actionTypes.Q,
  q
});

const stars = stars => ({
  type: actionTypes.STARS,
  stars
});

const license = license => ({
  type: actionTypes.LICENSE,
  license
});

const fork = fork => ({
  type: actionTypes.FORK,
  fork
});

const page = page => ({
  type: actionTypes.PAGE,
  page
});

export { url, q, stars, license, fork, page };
