import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import VoteContainer from "../Vote/Vote.container";
import Score from "../Score/Score.component";
import { VOTE_TYPE } from "../Vote/Vote.enum";

const CommentList = ({ comments }) => (
  <div>
    <h1 className="title is-4">Comments</h1>
    {comments.length > 0 ? (
      comments.map(comment => (
        <div
          key={comment.id}
          className="notification is-light"
          data-test="list-item"
        >
          <span className="is-size-7">
            <span>commented on </span>
            <span>
              {new Date(comment.timestamp).toLocaleDateString("en-US")}
            </span>
            <br />
            <span>by </span>
            <strong className="title is-5">{comment.author} </strong>
            <Link
              to={`/post/${comment.parentId}/comment/${comment.id}`}
              className="has-text-danger"
            >
              <span className="icon is-small">
                <i className="fas fa-edit" />
              </span>
              edit
            </Link>
          </span>
          <Score voteScore={comment.voteScore} />
          <br />
          <p>{comment.body}</p>
          <br />
          <VoteContainer id={comment.id} type={VOTE_TYPE.COMMENT} />
        </div>
      ))
    ) : (
      <div className="notification is-dark" data-test="no-comments-found">
        <b>No comments here! =(</b>
      </div>
    )}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      deleted: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      parentDeleted: PropTypes.bool.isRequired,
      parentId: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      voteScore: PropTypes.number.isRequired
    })
  ).isRequired
};

export default CommentList;
