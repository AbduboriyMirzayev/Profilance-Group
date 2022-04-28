import * as actionTypes from "../actionTypes";

const initialState = {
  user: null,
  news: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case actionTypes.CREATE_NEWS: {
      return {
        ...state,
        news: [...state.news, action.payload],
      };
    }
    case actionTypes.APPROVE_NEWS: {
      const updatedNews = state.news.map((news) =>
        news.id !== action.payload ? news : { ...news, isApproved: true }
      );
      return { ...state, news: updatedNews };
    }
    case actionTypes.DELETE_NEWS: {
      const newsWithoutDeleted = state.news.filter(
        (news) => news.id !== action.id
      );
      return { ...state, news: newsWithoutDeleted };
    }
    case actionTypes.SIGN_OUT: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
