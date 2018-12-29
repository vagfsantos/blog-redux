import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { actionGetComments } from "./CommentList.actions";
import CommentList from "./CommentList.component";

export class CommentListContainer extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionGetComments(this.props.postId));
  }

  render() {
    const { comments } = this.props;
    return <CommentList comments={comments} />;
  }
}

export const mapStateToProps = ({ comments = [] }, { postId }) => {
  return {
    comments: comments.filter(
      comment => comment.parentId === postId && comment.deleted === false
    )
  };
};

export default connect(mapStateToProps)(CommentListContainer);
