import { all } from "redux-saga/effects";
import { watchSetCategories } from "../components/Menu/Menu.saga";
import { watchGetAllPosts } from "../components/PostList/PostList.saga";
import { watchAddNewPost } from "../components/NewPost/NewPost.saga";

export const sagaWatchers = function*() {
  yield all([watchSetCategories(), watchGetAllPosts(), watchAddNewPost()]);
};
