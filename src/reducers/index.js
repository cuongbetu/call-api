import { combineReducers } from "redux";
import products from "./products";
import search from "./search";
import productEditing from "./productEditing";

const appReducer = combineReducers({
  products,
  productEditing,
  search,
});

export default appReducer;
