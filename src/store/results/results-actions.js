import fetch from "cross-fetch";
import { actionTypes } from "../action-types";
import { stars, license, fork, q, page } from "../../store/query/query-actions";
import { endpoints } from "../../appConstants";

import { urlGenerator } from "../../utilities";

export function getResults(searchParameters = {}) {
  return dispatch => {
    if (searchParameters) {
      let fetchURL = `${endpoints.search}${urlGenerator(searchParameters)}`;

      // show loading indicator
      dispatch({
        type: actionTypes.LOADER,
        loader: true
      });

      if (searchParameters.page) {
        dispatch(page(searchParameters.page));
      }

      if (searchParameters.q) {
        dispatch(q(searchParameters.q));
      }

      if (searchParameters.stars) {
        dispatch(stars(searchParameters.stars));
      }

      if (searchParameters.license) {
        dispatch(license(searchParameters.license));
      }

      if (searchParameters.fork) {
        dispatch(fork(searchParameters.fork));
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
  };
}

export default { getResults };
