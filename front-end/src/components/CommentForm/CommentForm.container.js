import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CommentForm from "./CommentForm.component";
import { actionAddComment, actionUpdateComment } from "./CommentForm.actions";
import { actionGetComments } from "../CommentList/CommentList.actions";

class CommentFormContainer extends Component {
  static propTypes = {
    id: PropTypes.string,
    parentId: PropTypes.string.isRequired
  };

  componentDidMount() {
    return this.props.id && this.props.getComments(this.props.parentId);
  }

  render() {
    return (
      <CommentForm
        onSaveNewComment={this.props.onSaveNewComment}
        onUpdateComment={this.props.onUpdateComment}
        comment={this.props.comment}
      />
    );
  }
}

const mapStateToPros = ({ comments }, { id }) => {
  return {
    comment: comments.find(comment => comment.id === id)
  };
};

const mapDispatchToProps = (dispatch, { parentId }) => {
  return {
    onSaveNewComment(comment) {
      dispatch(actionAddComment({ ...comment, parentId, voteScore: 1 }));
    },

    onUpdateComment(comment) {
      dispatch(actionUpdateComment(comment));
    },

    getComments(id) {
      dispatch(actionGetComments(id));
    },

    onDelete(comment) {}
  };
};

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(CommentFormContainer);
