import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CommentForm from "./CommentForm.component";
import { actionAddComment } from "./CommentForm.actions";

class CommentFormContainer extends Component {
  static propTypes = {
    parentId: PropTypes.string.isRequired
  };

  render() {
    return <CommentForm onSubmit={this.props.onSubmit} />;
  }
}

const mapDispatchToProps = (dispatch, { parentId }) => {
  return {
    onSubmit(comment) {
      dispatch(actionAddComment({ ...comment, parentId, voteScore: 1 }));
    },

    onDelete(comment) {}
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentFormContainer);
