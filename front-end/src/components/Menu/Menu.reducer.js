import { SET_CATEGORIES } from "./Menu.actions";

export const categoryReducer = (previousState = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      if (action.payload) {
        return action.payload;
      }
    default:
      return previousState;
  }
};
