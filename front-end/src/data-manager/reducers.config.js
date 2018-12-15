import { combineReducers } from "redux";

import { categoryReducer as categories } from "../components/Menu/Menu.reducer";
import { PostListReducer as posts } from "../components/PostList/PostList.reducer";

export const reducerConfig = combineReducers({
  categories,
  posts
});
