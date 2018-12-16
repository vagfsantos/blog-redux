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

  let sortedPosts = [];

  if (state.filters.votes) {
    sortedPosts = postsToBeRendered.sort((a, b) => {
      if (state.filters.votes === "DESC") {
        return b.voteScore - a.voteScore;
      }
      return a.voteScore - b.voteScore;
    });
  }

  if (state.filters.date) {
    sortedPosts = postsToBeRendered.sort((a, b) => {
      if (state.filters.date === "DESC") {
        return b.timestamp - a.timestamp;
      }
      return a.timestamp - b.timestamp;
    });
  }

  return {
    postIds: sortedPosts.map(post => post.id)
  };
};

export default connect(mapStateToProps)(PostListContainer);
