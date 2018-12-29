export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const actionAddComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: { comment }
  };
};

export const actionUpdateComment = comment => {
  return {
    type: UPDATE_COMMENT,
    payload: { comment }
  };
};
