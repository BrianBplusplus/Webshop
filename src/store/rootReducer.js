import { combineReducers } from "redux";
import productReducer from "./shopproducts/reducer";
import cartReducer from "./cart/reducer";

export default combineReducers({
  products: productReducer,
  cart: cartReducer
  // we can add more "slice" subreducers here later on...
});
