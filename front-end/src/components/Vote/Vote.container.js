import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { actionVote } from "./Vote.actions";
import Vote from "./Vote.component";

class VoteContainer extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired
  };

  render() {
    const { onThumbsDown, onThumbsUp } = this.props;

    return <Vote onThumbsDown={onThumbsDown} onThumbsUp={onThumbsUp} />;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onThumbsUp() {
      return dispatch(actionVote(ownProps.postId, "upVote"));
    },

    onThumbsDown() {
      return dispatch(actionVote(ownProps.postId, "downVote"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VoteContainer);
