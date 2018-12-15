import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import { sagaWatchers } from "./saga.config";

const sagaMiddleware = createSagaMiddleware();
export const middlewareConfig = applyMiddleware(sagaMiddleware);
export const runSaga = () => sagaMiddleware.run(sagaWatchers);
