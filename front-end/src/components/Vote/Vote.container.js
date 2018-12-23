import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Vote from "./Vote.component";

class VoteContainer extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired
  };

  render() {
    const { onThumbsDown, onThumbsUp, postId } = this.props;

    return <Vote onThumbsDown={onThumbsDown} onThumbsUp={onThumbsUp} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onThumbsUp(id) {},

    onThumbsDown(id) {}
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VoteContainer);
