export const FETCH_ALL_POSTS = "GET_ALL_POSTS";
export const SET_ALL_POSTS = "SET_ALL_POSTS";

export const actionFetchAllPosts = () => {
  return {
    type: FETCH_ALL_POSTS
  };
};

export const actionSetAllPosts = posts => {
  return {
    type: SET_ALL_POSTS,
    payload: posts
  };
};
