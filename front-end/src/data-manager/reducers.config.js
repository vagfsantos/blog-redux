import reduceReducers from "reduce-reducers";
import { combineReducers } from "redux";

import { categoryReducer as categories } from "../components/Menu/Menu.reducer";
import { FiltersReducer as filters } from "../components/Filters/Filters.reducer";
import { PostListReducer } from "../components/PostList/PostList.reducer";
import { NewPostReducer } from "../components/NewPost/NewPost.reducer";

export const reducerConfig = combineReducers({
  categories,
  posts: reduceReducers(PostListReducer, NewPostReducer),
  filters
});
