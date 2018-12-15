import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.component";

import { Provider } from "react-redux";
import { STORE } from "./data-manager/store";

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById("root")
);
