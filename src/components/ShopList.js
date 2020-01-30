import React, { Component } from "react";
import ShopItem from "./ShopItem";

export default class ShopList extends Component {
  render() {
    return (
      <div>
        Shop list
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    );
  }
}
