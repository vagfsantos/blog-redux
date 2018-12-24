import { VOTE, VOTE_FAIL } from "./Vote.actions";

export const VoteReducer = (state = [], action) => {
  switch (action.type) {
    case VOTE:
      return state.map(post => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            voteScore:
              action.payload.vote === "upVote"
                ? post.voteScore + 1
                : post.voteScore - 1
          };
        }

        return post;
      });

    case VOTE_FAIL:
      return state.map(post => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            voteScore:
              action.payload.vote === "upVote"
                ? post.voteScore - 1
                : post.voteScore + 1
          };
        }

        return post;
      });

    default:
      return state;
  }
};
