import React, { Component } from "react";

export default class ShopProduct extends Component {
  handleAddToCart = () => {
    console.log("handelAddToCart has been clicked");
    this.props.addToCart(this.props.id);
  };

  render() {
    return (
      <ul>
        <li>{this.props.productname}</li>
        <li>
          <img alt={this.props.productname} src={this.props.image} />
        </li>
        <li>€{this.props.productprice}</li>
        <button onClick={this.handleAddToCart}>Add to cart</button>
      </ul>
    );
  }
}
