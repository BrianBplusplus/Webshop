export function setCart(data) {
  return {
    type: "cart/FETCHED",
    payload: data
  };
}

export function fetchCart(product) {
  console.log("fetchCart() product name", product.name);
  return (dispatch, getState) => {
    dispatch(setCart(product));
  };
}
