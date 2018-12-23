export const ADD_NEW_POST = "ADD_NEW_POST";
export const EDIT_POST = "EDIT_POST";
export const SUCCESSFULLY_SAVED_NEW_POST = "SUCCESSFULLY_SAVED_NEW_POST";
export const CANCEL_ADDED_NEW_POST = "CANCEL_ADDED_NEW_POST";

export const actionAddNewPost = post => {
  return {
    type: ADD_NEW_POST,
    payload: post
  };
};

export const actionEditPost = post => {
  return {
    type: EDIT_POST,
    payload: post
  };
};

export const actionDeleteAddedNewPost = post => {
  return {
    type: CANCEL_ADDED_NEW_POST,
    payload: post
  };
};

export const actionSuccessfullySavedNewPost = (id, post) => {
  return {
    type: SUCCESSFULLY_SAVED_NEW_POST,
    payload: { id, post }
  };
};
