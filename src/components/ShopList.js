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

  render() {
    const loading = !this.props.products;
    console.log("this.props.products", this.props.products);
    return (
      <div>
        Shop list
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="productlist">
            {this.props.products.data.map(currentProduct => {
              return (
                <ShopProduct
                  key={currentProduct.id}
                  productname={currentProduct.name}
                  image={currentProduct.imageUrl}
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

// this.props.dispatch({
//   type: "products/FETCHED",
//   payload: data
// })
