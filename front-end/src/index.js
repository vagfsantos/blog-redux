import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/App/App.container";

import { Provider } from "react-redux";
import { STORE } from "./data-manager/store";

ReactDOM.render(
  <Provider store={STORE}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
