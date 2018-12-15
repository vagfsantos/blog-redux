import { combineReducers } from "redux";

import { categoryReducer as categories } from "../components/Menu/Menu.reducer";

export const reducerConfig = combineReducers({
  categories
});
