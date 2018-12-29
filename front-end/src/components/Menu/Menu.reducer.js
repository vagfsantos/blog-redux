import { SET_CATEGORIES } from "./Menu.actions";

export const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      if (action.payload) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
};
