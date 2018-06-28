import fetch from "cross-fetch";
import { actionTypes } from "../action-types";
import {
  url,
  stars,
  license,
  forked,
  keywords,
  result_page
} from "../../store/query/query-actions";
import { endpoints } from "../../endpoints";

export function getResults(searchParameters, dispatch) {
  searchParameters = searchParameters || {};

  const perPage = "&per_page=10";
  const fetchURL = endpoints.search + searchParameters.url + perPage;

  // show loading indicator
  dispatch({
    type: actionTypes.LOADER,
    loader: true
  });

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

      keywords({ keywords: searchParameters.keywords }, dispatch);
      stars({ stars: searchParameters.stars }, dispatch);
      license({ license: searchParameters.license }, dispatch);
      forked({ forked: searchParameters.forked }, dispatch);
      url({ url: searchParameters.url }, dispatch);
    })
    .catch(error => {
      console.log(error);
    });
}

export default { getResults };
