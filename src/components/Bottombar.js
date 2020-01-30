import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Bottombar extends Component {
  render() {
    return (
      <div className="bottombar">
        <Link to={"/"}>Home Page</Link>
        <Link to={"/products"}>Products</Link>
      </div>
    );
  }
}
