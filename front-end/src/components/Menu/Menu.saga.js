import { put, takeEvery, call } from "redux-saga/effects";

import { FETCH_CATEGORIES, actionSetCategories } from "./Menu.actions";
import { fetchAllCategories } from "../../api/category.api";

export function* watchSetCategories() {
  yield takeEvery(FETCH_CATEGORIES, workerSetCategories);
}

export function* workerSetCategories() {
  try {
    const response = yield call(fetchAllCategories);
    yield put(actionSetCategories(response.categories));
  } catch (error) {
    console.error(error);
  }
}
