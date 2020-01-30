import api from "../../api";

export function productsFetched(data) {
  return {
    type: "products/FETCHED",
    payload: data
  };
}

export function fetchProducts(dispatch, getState) {
  api("/products").then(data => {
    // note: just `dispatch` here now
    dispatch(productsFetched(data));
  });
}
