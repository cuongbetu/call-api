import * as types from "../constant/ActionTypes";
const initialState = "";

const search = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_PRODUCT:
      return action.keyword;
    default:
      return state;
  }
};

export default search;
