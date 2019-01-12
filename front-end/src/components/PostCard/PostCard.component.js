import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import PostMetaData from "../PostMetaData/PostMetaData.component";
import Score from "../Score/Score.component";
import VoteContainer from "../Vote/Vote.container";
import { VOTE_TYPE } from "../Vote/Vote.enum";

const PostCard = ({ post }) => {
  return (
    <div className="box">
      <header className="columns">
        <div className="column is-9">
          <h2 className="title is-4">{post.title}</h2>
          <span className="tag is-warning">{post.category}</span>{" "}
          <Link to={`/${post.category}/${post.id}`}>
            <span className="icon">
              <i className="fas fa-book-reader" />
            </span>
            Learn more
          </Link>
        </div>
        <div className="column">
          <PostMetaData
            author={post.author}
            timestamp={post.timestamp}
            postId={post.id}
          />
        </div>
      </header>
      <footer className="columns">
        <div className="column is-10">
          <Score voteScore={post.voteScore} commentCount={post.commentCount} />
        </div>
        <div className="column is-2">
          <VoteContainer id={post.id} type={VOTE_TYPE.POST} />
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
