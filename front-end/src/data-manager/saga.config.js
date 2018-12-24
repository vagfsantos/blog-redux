import { all } from "redux-saga/effects";
import { watchSetCategories } from "../components/Menu/Menu.saga";
import { watchGetAllPosts } from "../components/App/App.saga";
import { watchVote } from "../components/Vote/Vote.saga";
import {
  watchAddNewPost,
  watchEditPost,
  watchDeletePost
} from "../components/NewPost/NewPost.saga";

export const sagaWatchers = function*() {
  yield all([
    watchSetCategories(),
    watchGetAllPosts(),
    watchAddNewPost(),
    watchEditPost(),
    watchDeletePost(),
    watchVote()
  ]);
};
