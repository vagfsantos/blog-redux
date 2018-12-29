import { all } from "redux-saga/effects";
import { watchSetCategories } from "../components/Menu/Menu.saga";
import { watchGetAllPosts } from "../components/App/App.saga";
import { watchVotePost, watchVoteComment } from "../components/Vote/Vote.saga";
import { watchGetComments } from "../components/CommentList/CommentList.saga";
import {
  watchAddComments,
  watchUpdateComment
} from "../components/CommentForm/CommentForm.saga";
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
    watchVotePost(),
    watchVoteComment(),
    watchGetComments(),
    watchAddComments()
  ]);
};
