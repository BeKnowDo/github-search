import fetch from "cross-fetch";
import { actionTypes } from "../action-types";
import { endpoints } from "../../endpoints";

export function getResults(query, dispatch) {
  query = query || "";
  const fetchURL = endpoints.search + query;

  // show loading indicator
  dispatch({
    type: actionTypes.LOADER,
    loader: true
  });

  // clear previous results before fetching
  dispatch({
    type: actionTypes.GET_RESULTS,
    results: null
  });

  fetch(fetchURL)
    .then(response => response.json())
    .then(data => {
      const results = data.items.length > 0 ? data.items : data;

      dispatch({
        type: actionTypes.GET_RESULTS,
        results
      });

      dispatch({
        type: actionTypes.LOADER,
        loader: false
      });
    })
    .catch(error => {
      console.log(error);
    });
}

export default { getResults };
