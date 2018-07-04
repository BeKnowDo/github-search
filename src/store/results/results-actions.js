import fetch from "cross-fetch";
import { actionTypes } from "../action-types";
import {
  url,
  stars,
  license,
  forked,
  keywords,
  resultPage
} from "../../store/query/query-actions";
import { endpoints } from "../../endpoints";

export function getResults(searchParameters) {
  return dispatch => {
    searchParameters = searchParameters || {};

    const perPage = "&per_page=10";
    let fetchURL = endpoints.search + searchParameters.url + perPage;

    if (searchParameters.resultPage) {
      fetchURL = fetchURL + `&page=${searchParameters.resultPage}`;
    }

    // console.log(fetchURL);

    // show loading indicator
    dispatch({
      type: actionTypes.LOADER,
      loader: true
    });

    if (searchParameters.resultPage) {
      dispatch(resultPage(searchParameters.resultPage));
    }

    if (searchParameters.keywords) {
      dispatch(keywords(searchParameters.keywords));
    }

    if (searchParameters.stars) {
      dispatch(stars(searchParameters.stars));
    }

    if (searchParameters.license) {
      dispatch(license(searchParameters.license));
    }

    if (searchParameters.forked) {
      dispatch(forked(searchParameters.forked));
    }

    if (searchParameters.url) {
      dispatch(url(searchParameters.url));
    }

    const fetchQuery = () => {
      fetch(fetchURL)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: actionTypes.RESULTS,
            results: data
          });

          dispatch({
            type: actionTypes.LOADER,
            loader: false
          });
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchQuery();
  };
}

export default { getResults };
