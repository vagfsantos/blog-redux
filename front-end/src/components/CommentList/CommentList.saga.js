import { put, takeEvery, call } from "redux-saga/effects";

import { fetchAllComments } from "../../api/comments.api";
import { GET_COMMENTS, actionSetComments } from "./CommentList.actions";

export function* watchGetComments() {
  yield takeEvery(GET_COMMENTS, workerGetComments);
}

export function* workerGetComments(action) {
  try {
    const response = yield call(() => fetchAllComments(action.payload.postId));
    yield put(actionSetComments(response));
  } catch (error) {
    console.error(error);
  }
}
