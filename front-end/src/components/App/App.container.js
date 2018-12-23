import React, { Component } from "react";
import { connect } from "react-redux";

import { actionFetchAllPosts } from "./App.actions";
import App from "./App.component";

class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(actionFetchAllPosts());
  }

  render() {
    return <App />;
  }
}

export default connect()(AppContainer);
