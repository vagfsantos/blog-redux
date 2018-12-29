import React from "react";
import PropTypes from "prop-types";

const Score = ({ voteScore, commentCount }) => (
  <div>
    <span>
      <span className="icon">
        <i className="fas fa-comments" />
      </span>
      <span className="is-size-7" data-test="comment-count">
        {commentCount}
      </span>
    </span>
    <span className="has-text-danger">
      <span className="icon">
        <i
          data-test="vote-score-class"
          className={`fas ${voteScore > 0 ? "fa-grin-hearts" : "fa-sad-tear"}`}
        />
      </span>
      <span data-test="vote-score" className="is-size-7">
        {voteScore}
      </span>
    </span>
  </div>
);

Score.propTypes = {
  commentCount: PropTypes.number,
  voteScore: PropTypes.number
};

export default Score;
