import { createStore } from "redux";
import { reducerConfig } from "./reducers.config";
import { middlewareConfig, runSaga } from "./middlewares.config";

export const STORE = createStore(reducerConfig, middlewareConfig);

runSaga();
