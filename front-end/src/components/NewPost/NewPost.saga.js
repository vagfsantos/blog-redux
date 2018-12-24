import { put, takeLatest, call } from "redux-saga/effects";
import {
  ADD_NEW_POST,
  EDIT_POST,
  DELETE_POST,
  actionSuccessfullySavedNewPost,
  actionDeleteAddedNewPost
} from "./NewPost.actions";
import { saveNewPost, editPost, deletePost } from "../../api/posts.api";

export function* watchAddNewPost() {
  yield takeLatest(ADD_NEW_POST, workerAddNewPost);
}

export function* watchEditPost() {
  yield takeLatest(EDIT_POST, workerEditPost);
}

export function* watchDeletePost() {
  yield takeLatest(DELETE_POST, workerDeletePost);
}

export function* workerAddNewPost(action) {
  try {
    const response = yield call(() => saveNewPost(action.payload));
    yield put(actionSuccessfullySavedNewPost(action.payload.id, response));
  } catch (error) {
    console.error(error);
    yield put(actionDeleteAddedNewPost(action.payload));
  }
}

export function* workerEditPost(action) {
  try {
    const response = yield call(() => editPost(action.payload));
    yield put(actionSuccessfullySavedNewPost(action.payload.id, response));
  } catch (error) {
    console.error(error);
  }
}

export function* workerDeletePost(action) {
  try {
    const response = yield call(() => deletePost(action.payload.id));
    yield put(actionSuccessfullySavedNewPost(action.payload.id, response));
  } catch (error) {
    console.error(error);
  }
}
