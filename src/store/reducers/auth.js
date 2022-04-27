import * as actionTypes from "../actionTypes";

const initialState = {
  user: null,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case actionTypes.SIGN_OUT:
    default:
      return initialState;
  }
}
