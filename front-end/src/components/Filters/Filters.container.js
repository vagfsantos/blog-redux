import React, { Component } from "react";
import { connect } from "react-redux";

import { actionFilterByDate, actionFilterByVote } from "./Filters.actions";
import Filters from "./Filters.component";

class FiltersContainer extends Component {
  render() {
    const { filterPostsBy } = this.props;
    return <Filters filterPostsBy={filterPostsBy} />;
  }
}

const mapDispatchToProps = dispatch => ({
  filterPostsBy: (filterBy, filter) => {
    if (filterBy === "date") {
      return dispatch(actionFilterByDate(filter));
    }

    return dispatch(actionFilterByVote(filter));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(FiltersContainer);
