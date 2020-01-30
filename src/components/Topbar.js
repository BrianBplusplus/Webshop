import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <Link to={"/"}>Home Page</Link>
        <Link to={"/products"}>Products</Link>
        <i className="fas fa-shopping-cart"></i>
      </div>
    );
  }
}
