import React, { Component } from "react";

export default class ShoppingCartProduct extends Component {
  render() {
    return (
      <ul className="shoplist">
        <div className="productbuttoncart">
          <div>
            <li>
              <img alt={this.props.productname} src={this.props.image} />
            </li>
            <div>
              <li>{this.props.productname}</li>

              <li>€{this.props.productprice}</li>
              <button className="cartbutton">Remove from cart</button>
            </div>
          </div>
        </div>
      </ul>
    );
  }
}
