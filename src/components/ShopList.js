import React, { Component } from "react";
import ShopItem from "./ShopProduct";
import api from "../api";

export default class ShopList extends Component {
  componentDidMount = () => {
    api("/products").then(data => console.log("api response", data));
  };

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
