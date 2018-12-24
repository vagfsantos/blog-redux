import React from "react";
import PropTypes from "prop-types";

import VoteContainer from "../Vote/Vote.container";
import Score from "../Score/Score.component";
import { VOTE_TYPE } from "../Vote/Vote.enum";

const CommentList = ({ comments }) => (
  <div>
    <h1 className="title is-4">Comments</h1>
    {comments.map(comment => (
      <div className="notification is-light">
        <button class="delete" />

        <span className="is-size-7">
          <span>commented on </span>
          <span>{new Date(comment.timestamp).toLocaleDateString("en-US")}</span>
          <br />
          <span>by </span>
          <strong className="title is-5">{comment.author} </strong>
          <a className="has-text-danger">
            <span class="icon is-small">
              <i class="fas fa-edit" />
            </span>
            edit
          </a>
        </span>
        <Score voteScore={comment.voteScore} />
        <br />
        <p>{comment.body}</p>
        <br />
        <VoteContainer id={comment.id} type={VOTE_TYPE.COMMENT} />
      </div>
    ))}
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
