import React from "react";
import PropTypes from "prop-types";

const PostList = ({ postIds }) => (
  <ul className="columns is-multiline">
    {postIds.map(postId => (
      <li key={postId} className="column is-4">
        {postId}
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
