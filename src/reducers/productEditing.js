import * as types from "../constant/ActionTypes";
const initialState = {};

const productEditing = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCT:
      state = action.product;
      return state;
    default:
      return state;
  }
};

export default productEditing;
