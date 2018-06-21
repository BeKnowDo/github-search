import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loader from "./loader/loader-reducer";
import results from "./results/results-reducer";
import query from "./query/query-reducer";

export default () => {
  const store = createStore(
    combineReducers({
      loader,
      results,
      query
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
  return store;
};
