import { combineReducers } from "redux";
import productReducer from "./shopproducts/reducer";

export default combineReducers({
  products: productReducer
  // we can add more "slice" subreducers here later on...
});
