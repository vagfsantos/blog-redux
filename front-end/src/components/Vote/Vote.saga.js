import { put, takeEvery, call } from "redux-saga/effects";

import { postVote } from "../../api/posts.api";
import { commentVote } from "../../api/comments.api";
import {
  VOTE_POST,
  actionVotePostFail,
  VOTE_COMMENT,
  actionVoteCommentFail
} from "./Vote.actions";

export function* watchVotePost() {
  yield takeEvery(VOTE_POST, workerVotePost);
}

export function* watchVoteComment() {
  yield takeEvery(VOTE_COMMENT, workerVoteComment);
}

export function* workerVotePost(action) {
  try {
    yield call(() => postVote(action.payload.id, action.payload.vote));
  } catch (error) {
    console.error(error);
    yield put(actionVotePostFail(action.paylod.id, action.payload.vote));
  }
}

export function* workerVoteComment(action) {
  try {
    yield call(() => commentVote(action.payload.id, action.payload.vote));
  } catch (error) {
    console.error(error);
    yield put(actionVoteCommentFail(action.paylod.id, action.payload.vote));
  }
}
