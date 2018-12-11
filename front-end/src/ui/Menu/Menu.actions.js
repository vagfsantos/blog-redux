export const GET_CATEGORIES = "GET_CATEGORIES";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES
  };
};

export const setCategories = categories => {
  return {
    type: SET_CATEGORIES,
    payload: categories
  };
};
