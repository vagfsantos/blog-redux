import { SET_COMMENTS } from "./CommentList.actions";

export const CommentListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.payload.comments;
    default:
      return state;
  }
};
