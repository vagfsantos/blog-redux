export const VOTE_POST = "VOTE_POST";
export const VOTE_POST_FAIL = "VOTE_POST_FAIL";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const VOTE_COMMENT_FAIL = "VOTE_COMMENT_FAIL";

export const actionVotePost = (id, vote) => {
  return {
    type: VOTE_POST,
    payload: { id, vote }
  };
};

export const actionVotePostFail = (id, vote) => {
  return {
    type: VOTE_POST_FAIL,
    payload: { id, vote }
  };
};

export const actionVoteComment = (id, vote) => {
  return {
    type: VOTE_COMMENT,
    payload: { id, vote }
  };
};

export const actionVoteCommentFail = (id, vote) => {
  return {
    type: VOTE_COMMENT_FAIL,
    payload: { id, vote }
  };
};
