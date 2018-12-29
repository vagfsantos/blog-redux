import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from "./CommentForm.actions";

export const CommentFormReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return state.concat(action.payload.comment);

    case UPDATE_COMMENT:
      return state.map(comment => {
        if (comment.id === action.payload.comment.id) {
          return action.payload.comment;
        }

        return comment;
      });

    case DELETE_COMMENT:
      return state.map(comment => {
        if (comment.id === action.payload.comment.id) {
          return {
            ...comment,
            deleted: true
          };
        }

        return comment;
      });

    default:
      return state;
  }
};

export const CommentPostReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return state.map(post => {
        if (post.id === action.payload.comment.parentId) {
          return {
            ...post,
            commentCount: post.commentCount + 1
          };
        }

        return post;
      });

    case DELETE_COMMENT:
      return state.map(post => {
        if (post.id === action.payload.comment.parentId) {
          return {
            ...post,
            commentCount: post.commentCount - 1
          };
        }

        return post;
      });
    default:
      return state;
  }
};
