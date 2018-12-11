import { put, takeEvery, call } from "redux-saga/effects";

import { GET_CATEGORIES, setCategories } from "./Menu.actions";
import { fetchAllCategories } from "../../api/category.api";

export function* watchSetCategories() {
  yield takeEvery(GET_CATEGORIES, workerSetCategories);
}

export function* workerSetCategories() {
  try {
    const response = yield call(fetchAllCategories);
    yield put(setCategories(response.categories));
  } catch (error) {
    console.error(error);
  }
}
