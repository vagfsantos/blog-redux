export const VOTE = "VOTE";
export const VOTE_FAIL = "VOTE_FAIL";

export const actionVote = (id, vote) => {
  return {
    type: VOTE,
    payload: { id, vote }
  };
};

export const actionVoteFail = (id, vote) => {
  return {
    type: VOTE_FAIL,
    payload: { id, vote }
  };
};
