export const FETCH_CATEGORIES = "GET_CATEGORIES";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const actionFetchCategories = () => {
  return {
    type: FETCH_CATEGORIES
  };
};

export const actionSetCategories = categories => {
  return {
    type: SET_CATEGORIES,
    payload: categories
  };
};
