import { SET_CATEGORIES } from "./Menu.actions";

export const categoryReducer = (previousState = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      console.log(previousState);
      return action.payload;
    default:
      return previousState;
  }
};
