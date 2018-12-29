import { SET_ALL_POSTS } from "./App.actions";

export const PostListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      if (action.payload) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
};
