import React, { Component } from "react";
import { connect } from "react-redux";

import PostList from "./PostList.component";
import { actionFetchAllPosts } from "./PostList.actions";

class PostListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(actionFetchAllPosts());
  }

  render() {
    const { postIds } = this.props;
    return <PostList postIds={postIds} />;
  }
}

const mapStateToProps = state => {
  return {
    postIds: state.posts.map(post => post.id)
  };
};

export default connect(mapStateToProps)(PostListContainer);
