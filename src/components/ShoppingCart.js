import React, { Component } from "react";
import { connect } from "react-redux";
import ShoppingCartProduct from "./ShoppingCartProduct";

class ShoppingCart extends Component {
  render() {
    const productsInCart = !this.props.cart.data.length > 0;
    return (
      <div>
        {productsInCart ? (
          <p>Your shopping cart is empty</p>
        ) : (
          <div className="productlist">
            {this.props.cart.data.map((currentProduct, index) => {
              return (
                <ShoppingCartProduct
                  key={index}
                  productname={currentProduct.name}
                  image={currentProduct.imageUrl}
                  productprice={currentProduct.price}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("Redux state in shoppingcart", reduxState);
  return {
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(ShoppingCart);
