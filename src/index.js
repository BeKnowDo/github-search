import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";

import { PersistGate } from "redux-persist/integration/react";

import storeConfig from "./store";

// Import Master Layout
import Master from "./layout/master";

// Import pages
import Home from "./pages/home";

import registerServiceWorker from "./registerServiceWorker";

// Create our store
const { persistor, store } = storeConfig();

// Inject any global styling rules
injectGlobal`
  body {
    font-family: Calibri, Helvetica, Arial, sans-serif;
    font-size: 12px;
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
  }
`;

const Root = ({ store }) => (
  <Master>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </PersistGate>
    </Provider>
  </Master>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
