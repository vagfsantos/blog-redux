import React from "react";
import PropTypes from "prop-types";

const Vote = ({ onThumbsUp, onThumbsDown }) => (
  <div>
    <button data-test="thumbs-up" onClick={onThumbsUp}>
      <span className="icon">
        <i className="fas fa-thumbs-up" />
      </span>
    </button>

    <button data-test="thumbs-down" onClick={onThumbsDown}>
      <span className="icon">
        <i className="fas fa-thumbs-down" />
      </span>
    </button>
  </div>
);

Vote.propTypes = {
  onThumbsDown: PropTypes.func.isRequired,
  onThumbsUp: PropTypes.func.isRequired
};

export default Vote;
