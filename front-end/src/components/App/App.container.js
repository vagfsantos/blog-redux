import React, { Component } from "react";
import { connect } from "react-redux";

import { actionFetchAllPosts } from "./App.actions";
import App from "./App.component";

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return <App />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllPosts() {
    dispatch(actionFetchAllPosts());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AppContainer);
