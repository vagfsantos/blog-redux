import React, { Component } from "react";
import { connect } from "react-redux";

import Filters from "./Filters.component";
import { actionFilterByDate, actionFilterByVote } from "./Filters.actions";
import { FILTER_TYPES } from "./Filters.enum";

class FiltersContainer extends Component {
  render() {
    const { filterPostsBy } = this.props;
    return <Filters filterPostsBy={filterPostsBy} />;
  }
}

export const mapDispatchToProps = dispatch => ({
  filterPostsBy: (filterBy, filter) => {
    if (filterBy === FILTER_TYPES.DATE) {
      return dispatch(actionFilterByDate(filter));
    }

    if (filterBy === FILTER_TYPES.VOTES) {
      return dispatch(actionFilterByVote(filter));
    }
  }
});

export default connect(
  null,
  mapDispatchToProps
)(FiltersContainer);
