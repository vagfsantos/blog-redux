import { FILTER_BY_DATE, FILTER_BY_VOTE } from "./Filters.actions";

export const FiltersReducer = (prevState = {}, action) => {
  switch (action.type) {
    case FILTER_BY_DATE:
      return {
        ...prevState,
        votes: null,
        date: action.payload
      };
    case FILTER_BY_VOTE:
      return {
        ...prevState,
        votes: action.payload,
        date: null
      };
    default:
      return {
        votes: "DESC",
        date: null
      };
  }
};
