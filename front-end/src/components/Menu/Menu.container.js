import React, { Component } from "react";
import { connect } from "react-redux";

import Menu from "./Menu.component";
import { actionFetchCategories } from "./Menu.actions";

class MenuContainer extends Component {
  async componentDidMount() {
    this.props.dispatch(actionFetchCategories());
  }

  render() {
    return <Menu categories={this.props.categories} />;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(MenuContainer);
