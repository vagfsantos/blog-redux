import reduceReducers from "reduce-reducers";
import { combineReducers } from "redux";

import { categoryReducer as categories } from "../components/Menu/Menu.reducer";
import { FiltersReducer as filters } from "../components/Filters/Filters.reducer";
import { PostListReducer } from "../components/App/App.reducer";
import { NewPostReducer } from "../components/NewPost/NewPost.reducer";
import { CommentListReducer } from "../components/CommentList/CommentList.reducer";
import {
  CommentFormReducer,
  CommentPostReducer
} from "../components/CommentForm/CommentForm.reducer";
import {
  VotePostReducer,
  VoteCommentReducer
} from "../components/Vote/Vote.reducer";

export const reducerConfig = combineReducers({
  categories,
  posts: reduceReducers(
    PostListReducer,
    NewPostReducer,
    VotePostReducer,
    CommentPostReducer
  ),
  comments: reduceReducers(
    CommentListReducer,
    VoteCommentReducer,
    CommentFormReducer
  ),
  filters
});
