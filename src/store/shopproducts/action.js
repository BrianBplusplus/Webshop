import api from "../../api";

export function fetchItem() {
  return (dispatch, getState) => {
    api(`/products`).then(product => {
      dispatch(setPost(product));
    });
  };
}
export function setItem(products) {
  return {
    type: "items/FETCHED",
    payload: products
  };
}
