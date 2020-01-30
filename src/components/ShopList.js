import React, { Component } from "react";
import { connect } from "react-redux";
import ShopProduct from "./ShopProduct";
import api from "../api";
import { fetchProducts } from "../store/shopproducts/action";

class ShopList extends Component {
  componentDidMount = () => {
    api("/products").then(data => {
      this.props.dispatch(fetchProducts);
    });
  };

  addToCart = id => {
    this.props.products.data.map(currentProduct => {
      if (currentProduct.id === id) {
        console.log("on : ", currentProduct.name);
        return;
      } else {
        return;
      }
    });
  };

  render() {
    const loading = !this.props.products.data.length > 0;
    return (
      <div>
        <h2>Shop list</h2>
        {loading ? (
          <i id="loadingspinner" className="fas fa-circle-notch"></i>
        ) : (
          <div className="productlist">
            {this.props.products.data.map(currentProduct => {
              return (
                <ShopProduct
                  key={currentProduct.id}
                  id={currentProduct.id}
                  productname={currentProduct.name}
                  image={currentProduct.imageUrl}
                  productprice={currentProduct.price}
                  addToCart={this.addToCart}
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
  console.log("REDUX STATE ===", reduxState);
  return {
    products: reduxState.products
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(ShopList);
