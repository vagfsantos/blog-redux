import reduceReducers from "reduce-reducers";
import { combineReducers } from "redux";

import { categoryReducer as categories } from "../components/Menu/Menu.reducer";
import { FiltersReducer as filters } from "../components/Filters/Filters.reducer";
import { PostListReducer } from "../components/App/App.reducer";
import { NewPostReducer } from "../components/NewPost/NewPost.reducer";
import { VoteReducer } from "../components/Vote/Vote.reducer";
import { CommentListReducer as comments } from "../components/CommentList/CommentList.reducer";

export const reducerConfig = combineReducers({
  categories,
  posts: reduceReducers(PostListReducer, NewPostReducer, VoteReducer),
  comments,
  filters
});
