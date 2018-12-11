import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import { createStore, combineReducers, applyMiddleware } from "redux";

import { categoryReducer } from "../ui/Menu/Menu.reducer";
import { watchSetCategories } from "../ui/Menu/Menu.sagas";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  categories: categoryReducer
});

export const STORE = createStore(reducers, applyMiddleware(sagaMiddleware));

const sagas = function*() {
  yield all([watchSetCategories()]);
};
sagaMiddleware.run(sagas);
