import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App/App.component";

import { Provider } from "react-redux";
import { STORE } from "./redux-config/store";

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById("root")
);
