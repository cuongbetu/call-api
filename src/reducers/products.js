import * as types from "../constant/ActionTypes";
import { findIndex } from "../constant/HelperMethod";

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS:
      state = action.products;
      return [...state];
    case types.ADD_PRODUCTS:
      state.push(action.product);
      return [...state];
    case types.DELETE_PRODUCTS:
      let indexDelete = findIndex(state, action.id);
      state.splice(indexDelete, 1);
      return [...state];
    case types.UPDATE_PRODUCT:
      let indexUpdate = findIndex(state, action.product.id);
      state.splice(indexUpdate, 1, action.product);
      return [...state];
    default:
      return [...state];
  }
};

export default products;
