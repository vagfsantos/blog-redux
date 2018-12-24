export const GET_COMMENTS = "GET_COMMENTS";
export const SET_COMMENTS = "SET_COMMENTS";

export const actionGetComments = postId => {
  return {
    type: GET_COMMENTS,
    payload: { postId }
  };
};

export const actionSetComments = comments => {
  return {
    type: SET_COMMENTS,
    payload: comments
  };
};
