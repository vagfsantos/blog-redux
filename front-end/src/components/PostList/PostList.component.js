import React from "react";
import PropTypes from "prop-types";

import PostCardContainer from "../PostCard/PostCard.container";

const PostList = ({ postIds }) => (
  <ul className="columns is-multiline">
    {postIds.map(postId => (
      <li key={postId} className="column is-12">
        <PostCardContainer id={postId} />
      </li>
    ))}
  </ul>
);

PostList.defaultProps = {
  postIds: []
};

PostList.propTypes = {
  postIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PostList;
