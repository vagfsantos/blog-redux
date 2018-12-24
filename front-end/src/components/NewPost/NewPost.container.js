import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  actionAddNewPost,
  actionEditPost,
  actionDeletePost
} from "./NewPost.actions";
import NewPost from "./NewPost.component";

class NewPostContainer extends Component {
  static propTypes = {
    postId: PropTypes.string
  };

  render() {
    const { onSavePost, onDeletePost, categories, post } = this.props;
    return (
      <NewPost
        onSavePost={onSavePost}
        onDeletePost={onDeletePost}
        categories={categories}
        post={post}
      />
    );
  }
}

const mapStateToProps = ({ categories, posts }, { postId }) => {
  return {
    categories: categories.map(cat => cat.name),
    post: posts.find(post => post.id === postId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSavePost(post, isEditing) {
      if (isEditing) {
        return dispatch(actionEditPost(post));
      }
      return dispatch(actionAddNewPost(post));
    },

    onDeletePost(id) {
      return dispatch(actionDeletePost(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostContainer);
