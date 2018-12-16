export const FILTER_BY_DATE = "FILTER_BY_DATE";
export const FILTER_BY_VOTE = "FILTER_BY_VOTE";

export const actionFilterByDate = filter => {
  return {
    type: FILTER_BY_DATE,
    payload: filter
  };
};

export const actionFilterByVote = filter => {
  return {
    type: FILTER_BY_VOTE,
    payload: filter
  };
};
