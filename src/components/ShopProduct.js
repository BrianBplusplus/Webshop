import React, { Component } from "react";

export default class ShopProduct extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.productname}</li>
        <li>{this.props.image}</li>
      </ul>
    );
  }
}
