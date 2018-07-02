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

export function getResults(searchParameters, dispatch) {
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
    resultPage({ resultPage: searchParameters.resultPage }, dispatch);
  }

  if (searchParameters.keywords) {
    keywords({ keywords: searchParameters.keywords }, dispatch);
  }

  if (searchParameters.stars) {
    stars({ stars: searchParameters.stars }, dispatch);
  }

  if (searchParameters.license) {
    license({ license: searchParameters.license }, dispatch);
  }

  if (searchParameters.forked) {
    forked({ forked: searchParameters.forked }, dispatch);
  }
  if (searchParameters.url) {
    url({ url: searchParameters.url }, dispatch);
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
}

export default { getResults };
