import { FILTER_BY_DATE, FILTER_BY_VOTE } from "./Filters.actions";
import { ORDER_BY, FILTER_TYPES } from "./Filters.enum";

const { DATE, VOTES } = FILTER_TYPES;

export const FiltersReducer = (prevState = {}, action) => {
  switch (action.type) {
    case FILTER_BY_DATE:
      return {
        ...prevState,
        [VOTES]: null,
        [DATE]: action.payload
      };
    case FILTER_BY_VOTE:
      return {
        ...prevState,
        [VOTES]: action.payload,
        [DATE]: null
      };
    default:
      return {
        [VOTES]: ORDER_BY.DESC,
        [DATE]: null
      };
  }
};
