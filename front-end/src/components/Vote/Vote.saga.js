import { put, takeEvery, call } from "redux-saga/effects";

import { postVote } from "../../api/posts.api";
import { VOTE, VOTE_FAIL, actionVoteFail } from "./Vote.actions";

export function* watchVote() {
  yield takeEvery(VOTE, workerVote);
}

export function* workerVote(action) {
  try {
    yield call(() => postVote(action.payload.id, action.payload.vote));
  } catch (error) {
    console.error(error);
    yield put(actionVoteFail(action.paylod.id, action.payload.vote));
  }
}
