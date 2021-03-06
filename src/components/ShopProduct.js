import React, { Component } from "react";

export default class ShopProduct extends Component {
  handleAddToCart = () => {
    this.props.addToCart(this.props.id);
  };

  render() {
    return (
      <ul className="shoplist">
        <div className="productbutton">
          <div>
            <li>
              <img alt={this.props.productname} src={this.props.image} />
            </li>
            <div className="productdivider">
              <li>{this.props.productname}</li>

              <li>€{this.props.productprice}</li>
            </div>
          </div>
          <div className="buttonstack">
            <button className="cartbutton">Read More</button>
            <button className="cartbutton" onClick={this.handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </ul>
    );
  }
}
