import { put, takeLatest, call } from "redux-saga/effects";

import {
  addComments,
  updateComment,
  deleteComment
} from "../../api/comments.api";
import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from "./CommentForm.actions";

export function* watchAddComments() {
  yield takeLatest(ADD_COMMENT, workerAddComments);
}

export function* watchUpdateComment() {
  yield takeLatest(UPDATE_COMMENT, workerUpdateComment);
}

export function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT, workerDeleteComment);
}

export function* workerAddComments(action) {
  try {
    yield call(() => addComments(action.payload.comment));
  } catch (error) {
    console.error(error);
  }
}

export function* workerUpdateComment(action) {
  try {
    yield call(() => updateComment(action.payload.comment));
  } catch (error) {
    console.error(error);
  }
}

export function* workerDeleteComment(action) {
  try {
    yield call(() => deleteComment(action.payload.comment.id));
  } catch (error) {
    console.error(error);
  }
}
