import { put, takeEvery, call } from "redux-saga/effects";

import { FETCH_ALL_POSTS, actionSetAllPosts } from "./PostList.actions";
import { fetchAllPosts } from "../../api/posts.api";

export function* watchGetAllPosts() {
  yield takeEvery(FETCH_ALL_POSTS, workerGetAllPosts);
}

export function* workerGetAllPosts() {
  try {
    const response = yield call(fetchAllPosts);
    yield put(actionSetAllPosts(response));
  } catch (error) {
    console.error(error);
  }
}
