import { put, takeLatest, call } from "redux-saga/effects";

import { addComments } from "../../api/comments.api";
import { ADD_COMMENT } from "./CommentForm.actions";

export function* watchAddComments() {
  yield takeLatest(ADD_COMMENT, workerAddComments);
}

export function* workerAddComments(action) {
  try {
    const response = yield call(() => addComments(action.payload.comment));
  } catch (error) {
    console.error(error);
  }
}
