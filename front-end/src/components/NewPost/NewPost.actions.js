export const ADD_NEW_POST = "ADD_NEW_POST";
export const SUCCESSFULLY_SAVED_NEW_POST = "SUCCESSFULLY_SAVED_NEW_POST";
export const CANCEL_ADDED_NEW_POST = "CANCEL_ADDED_NEW_POST";

export const actionAddNewPost = post => {
  return {
    type: ADD_NEW_POST,
    payload: post
  };
};

export const actionDeleteAddedNewPost = post => {
  return {
    type: CANCEL_ADDED_NEW_POST,
    payload: post
  };
};

export const actionSuccessfullySavedNewPost = (id, complementInfo) => {
  return {
    type: SUCCESSFULLY_SAVED_NEW_POST,
    payload: { id, complementInfo }
  };
};
