import React from "react";
import { Link } from "react-router-dom";

import PostMetaData from "../PostMetaData/PostMetaData.component";
import VoteContainer from "../Vote/Vote.container";
import Score from "../Score/Score.component";
import { VOTE_TYPE } from "../Vote/Vote.enum";

const PostContent = ({ post }) =>
  post ? (
    <article className="box" data-test="post">
      <header>
        <h1 className="has-text-link title is-3">{post.title}</h1>
        <PostMetaData
          author={post.author}
          timestamp={post.timestamp}
          postId={post.id}
        />
        <Score voteScore={post.voteScore} commentCount={post.commentCount} />
      </header>

      <main>
        <p>{post.body}</p>
      </main>

      <br />

      <footer>
        <h3 className="title is-5">Let your vote</h3>
        <VoteContainer id={post.id} type={VOTE_TYPE.POST} />

        <br />

        <Link className="button is-dark" to={`/post/${post.id}/comment`}>
          Comment
        </Link>
      </footer>
    </article>
  ) : (
    <div className="box">
      <h1 className="has-text-link title is-3" data-test="post-not-found">
        Post not found
      </h1>
    </div>
  );

export default PostContent;
