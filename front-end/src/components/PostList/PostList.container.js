import React, { Component } from "react";
import { connect } from "react-redux";

import PostList from "./PostList.component";
import { actionFetchAllPosts } from "./PostList.actions";
import { ORDER_BY, FILTER_TYPES } from "../Filters/Filters.enum";

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

  if (state.filters[FILTER_TYPES.VOTES]) {
    sortedPosts = postsToBeRendered.sort((a, b) => {
      if (state.filters[FILTER_TYPES.VOTES] === ORDER_BY.DESC) {
        return b.voteScore - a.voteScore;
      }
      return a.voteScore - b.voteScore;
    });
  }

  if (state.filters[FILTER_TYPES.DATE]) {
    sortedPosts = postsToBeRendered.sort((a, b) => {
      if (state.filters[FILTER_TYPES.DATE] === ORDER_BY.DESC) {
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
