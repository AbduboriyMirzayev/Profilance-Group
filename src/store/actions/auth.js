import * as actionTypes from "../actionTypes";

export const signin = (user) => ({
  payload: user,
  type: actionTypes.SIGN_IN,
});

export const signout = () => ({ type: actionTypes.SIGN_OUT });
