import { put, takeLatest, call } from "redux-saga/effects";
import {
  ADD_NEW_POST,
  actionSuccessfullySavedNewPost,
  actionDeleteAddedNewPost
} from "./NewPost.actions";
import { saveNewPost } from "../../api/posts.api";

export function* watchAddNewPost() {
  yield takeLatest(ADD_NEW_POST, workerAddNewPost);
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
