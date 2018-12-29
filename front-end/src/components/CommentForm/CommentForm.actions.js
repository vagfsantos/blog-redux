export const ADD_COMMENT = "ADD_COMMENT";

export const actionAddComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: { comment }
  };
};
