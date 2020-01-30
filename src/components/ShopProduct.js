import React, { Component } from "react";

export default class ShopProduct extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.productname}</li>
        <li>
          <img alt={this.props.productname} src={this.props.image} />
        </li>
        <li>{this.props.productprice}</li>
      </ul>
    );
  }
}
