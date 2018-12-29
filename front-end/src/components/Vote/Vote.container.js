import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { actionVotePost, actionVoteComment } from "./Vote.actions";
import { VOTE_TYPE, VOTE } from "./Vote.enum";
import Vote from "./Vote.component";

class VoteContainer extends Component {
  static propTypes = {
    id: PropTypes.string,
    onThumbsUp: PropTypes.func.isRequired,
    onThumbsDown: PropTypes.func.isRequired
  };

  render() {
    const { onThumbsDown, onThumbsUp } = this.props;

    return <Vote onThumbsDown={onThumbsDown} onThumbsUp={onThumbsUp} />;
  }
}

export const mapDispatchToProps = (dispatch, { id, type }) => {
  const { POST, COMMENT } = VOTE_TYPE;

  return {
    onThumbsUp() {
      if (type === POST) {
        return dispatch(actionVotePost(id, VOTE.UP));
      }

      if (type === COMMENT) {
        return dispatch(actionVoteComment(id, VOTE.UP));
      }
    },

    onThumbsDown() {
      if (type === POST) {
        return dispatch(actionVotePost(id, VOTE.DOWN));
      }

      if (type === COMMENT) {
        return dispatch(actionVoteComment(id, VOTE.DOWN));
      }
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VoteContainer);
