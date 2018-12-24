import {
  VOTE_POST,
  VOTE_POST_FAIL,
  VOTE_COMMENT,
  VOTE_COMMENT_FAIL
} from "./Vote.actions";
import { VOTE } from "./Vote.enum";

const getCalculedVote = (vote, hasFailed) => {
  let value = 0;

  if (vote === VOTE.UP) {
    value = 1;
  }

  if (vote === VOTE.DOWN) {
    value = -1;
  }

  return hasFailed ? value * -1 : value;
};

const successVote = (state, action) =>
  state.map(post => {
    if (post.id === action.payload.id) {
      return {
        ...post,
        voteScore: post.voteScore + getCalculedVote(action.payload.vote, false)
      };
    }

    return post;
  });

const failedVote = (state, action) =>
  state.map(post => {
    if (post.id === action.payload.id) {
      return {
        ...post,
        voteScore: post.voteScore + getCalculedVote(action.payload.vote, true)
      };
    }

    return post;
  });

export const VotePostReducer = (state = [], action) => {
  switch (action.type) {
    case VOTE_POST:
      return successVote(state, action);
    case VOTE_POST_FAIL:
      return failedVote(state, action);

    default:
      return state;
  }
};

export const VoteCommentReducer = (state = [], action) => {
  switch (action.type) {
    case VOTE_COMMENT:
      return successVote(state, action);
    case VOTE_COMMENT_FAIL:
      return failedVote(state, action);

    default:
      return state;
  }
};
