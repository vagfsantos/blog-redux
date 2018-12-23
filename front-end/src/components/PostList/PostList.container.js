import React, { Component } from "react";
import { connect } from "react-redux";

import PostList from "./PostList.component";
import { ORDER_BY, FILTER_TYPES } from "../Filters/Filters.enum";

const { VOTES, DATE } = FILTER_TYPES;
const { DESC } = ORDER_BY;

class PostListContainer extends Component {
  render() {
    const { postIds, category } = this.props;
    return <PostList postIds={postIds} category={category} />;
  }
}

export const mapStateToProps = ({ posts, filters }, { category }) => {
  const postsToBeRendered = category
    ? posts.filter(post => post.category === category)
    : posts;

  let sortedPosts = postsToBeRendered;

  if (filters[VOTES]) {
    sortedPosts = postsToBeRendered.sort((a, b) => {
      if (filters[VOTES] === DESC) {
        return b.voteScore - a.voteScore;
      }
      return a.voteScore - b.voteScore;
    });
  }

  if (filters[DATE]) {
    sortedPosts = postsToBeRendered.sort((a, b) => {
      if (filters[DATE] === DESC) {
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
