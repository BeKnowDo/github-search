import { combineReducers } from "redux";
import loader from "./loader/loader-reducer";
import results from "./results/results-reducer";
import query from "./query/query-reducer";

export default combineReducers({
  loader,
  results,
  query
});
