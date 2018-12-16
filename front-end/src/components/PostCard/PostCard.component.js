import React from "react";
import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  const date = new Date(post.timestamp);

  return (
    <div className="box">
      <header className="columns">
        <div className="column is-9">
          <h2 className="title is-4">{post.title}</h2>
          <span className="tag is-warning">{post.category}</span>{" "}
          <a href="#">
            <span className="icon">
              <i className="fas fa-book-reader" />
            </span>
            Learn more
          </a>
        </div>
        <div className="column">
          <p className="is-size-7">
            <span>Published at </span>
            <time dateTime={date.toLocaleDateString()}>
              {date.toLocaleDateString()}
            </time>
          </p>
          <p className="is-size-7">
            by <b>{post.author}</b>
            <a href="#">
              <span className="icon">
                <i className="fas fa-edit" />
              </span>
              edit
            </a>
          </p>
        </div>
      </header>
      <footer className="columns">
        <div className="column is-10">
          <span>
            <span className="icon">
              <i className="fas fa-comments" />
            </span>
            <span className="is-size-7">{post.commentCount}</span>
          </span>
          <span className="has-text-danger">
            <span className="icon">
              <i
                className={`fas ${
                  post.voteScore > 0 ? "fa-grin-hearts" : "fa-sad-tear"
                }`}
              />
            </span>
            <span className="is-size-7">{post.voteScore}</span>
          </span>
        </div>
        <div className="column is-2">
          <button href="#">
            <span className="icon">
              <i className="fas fa-thumbs-up" />
            </span>
          </button>
          <button>
            <span className="icon">
              <i className="fas fa-thumbs-down" />
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
};
const { number, string, bool, shape } = PropTypes;

PostCard.propTypes = {
  post: shape({
    author: string.isRequired,
    body: string.isRequired,
    category: string.isRequired,
    commentCount: number.isRequired,
    deleted: bool.isRequired,
    id: string.isRequired,
    timestamp: number.isRequired,
    title: string.isRequired,
    voteScore: number.isRequired
  }).isRequired
};

export default PostCard;
