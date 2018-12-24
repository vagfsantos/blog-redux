import React from "react";

import PostMetaData from "../PostMetaData/PostMetaData.component";
import VoteContainer from "../Vote/Vote.container";
import Score from "../Score/Score.component";
import { VOTE_TYPE } from "../Vote/Vote.enum";

const PostContent = ({ post }) => (
  <article className="box">
    <header>
      <h1 className="has-text-link title is-3">{post.title}</h1>
      <PostMetaData
        author={post.author}
        timestamp={post.timestamp || 12333}
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
    </footer>
  </article>
);

export default PostContent;
