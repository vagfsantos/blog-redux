import React, { Component } from "react";
import { connect } from "react-redux";

import PostList from "./PostList.component";
import { actionFetchAllPosts } from "./PostList.actions";

class PostListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(actionFetchAllPosts());
  }

  render() {
    const { postIds, category } = this.props;
    return <PostList postIds={postIds} category={category} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const postsToBeRendered = ownProps.category
    ? state.posts.filter(post => post.category === ownProps.category)
    : state.posts;

  return {
    postIds: postsToBeRendered.map(post => post.id)
  };
};

export default connect(mapStateToProps)(PostListContainer);
