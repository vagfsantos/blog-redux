import React from "react";
import PropTypes from "prop-types";

import PostCardContainer from "../PostCard/PostCard.container";

const PostList = ({ postIds, category }) => (
  <div>
    <h2 className="has-text-centered title is-2 is-uppercase" data-test="title">
      {category ? category : "All posts"}
    </h2>
    <br />
    {postIds.length > 0 ? (
      <ul className="columns is-multiline">
        {postIds.map(postId => (
          <li key={postId} className="column is-12">
            <PostCardContainer id={postId} />
          </li>
        ))}
      </ul>
    ) : (
      <h4
        className="has-text-centered subtitle is-6"
        data-test="no-post-message"
      >
        There is not any post on this category
      </h4>
    )}
  </div>
);

PostList.defaultProps = {
  postIds: []
};

PostList.propTypes = {
  postIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PostList;
