import React, { Component } from "react";
import { connect } from "react-redux";

import Menu from "./Menu.component";
import { getCategories } from "./Menu.actions";

class MenuContainer extends Component {
  async componentDidMount() {
    this.props.dispatch(getCategories());
  }

  render() {
    return <Menu categories={this.props.categories} />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(MenuContainer);
