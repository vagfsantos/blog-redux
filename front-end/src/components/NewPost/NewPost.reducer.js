import {
  ADD_NEW_POST,
  CANCEL_ADDED_NEW_POST,
  SUCCESSFULLY_SAVED_NEW_POST
} from "./NewPost.actions";

export const NewPostReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return [...state, action.payload];

    case CANCEL_ADDED_NEW_POST:
      return state.filter(post => post.id !== action.payload.id);

    case SUCCESSFULLY_SAVED_NEW_POST:
      return state.map(post => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            ...action.payload.complementInfo
          };
        }

        return post;
      });
    default:
      return state;
  }
};
