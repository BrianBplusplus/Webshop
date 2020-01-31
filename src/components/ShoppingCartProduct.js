import React, { Component } from "react";

export default class ShoppingCartProduct extends Component {
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
        </div>
      </ul>
    );
  }
}
