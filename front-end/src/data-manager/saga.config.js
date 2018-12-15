import { all } from "redux-saga/effects";
import { watchSetCategories } from "../components/Menu/Menu.sagas";

export const sagaWatchers = function*() {
  yield all([watchSetCategories()]);
};
