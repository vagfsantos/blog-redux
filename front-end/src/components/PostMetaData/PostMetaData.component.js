import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostMetaData = ({ timestamp, author, postId }) => {
  const date = new Date(timestamp).toLocaleDateString("en-US");

  return (
    <div>
      <p className="is-size-7">
        <span>Published at </span>
        <time data-test="time" dateTime={date}>
          {date}
        </time>
      </p>
      <p className="is-size-7">
        by <b data-test="author">{author}</b>
        <Link data-test="link" to={`/post/new/${postId}`}>
          <span className="icon">
            <i className="fas fa-edit" />
          </span>
          edit
        </Link>
      </p>
    </div>
  );
};

PostMetaData.propTypes = {
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired
};

export default PostMetaData;
