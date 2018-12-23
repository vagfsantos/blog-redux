import React, { Component } from "react";
import { connect } from "react-redux";

import { actionAddNewPost } from "./NewPost.actions";
import NewPost from "./NewPost.component";

class NewPostContainer extends Component {
  render() {
    const { onSavePost, categories } = this.props;
    return <NewPost onSavePost={onSavePost} categories={categories} />;
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.map(cat => cat.name)
});

const mapDispatchToProps = dispatch => {
  return {
    onSavePost(post) {
      return dispatch(actionAddNewPost(post));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostContainer);
