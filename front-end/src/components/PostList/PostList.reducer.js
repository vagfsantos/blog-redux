import { SET_ALL_POSTS } from "./PostList.actions";

export const PostListReducer = (prevState = [], action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      if (action.payload) {
        return action.payload;
      }
    default:
      return prevState;
  }
};
