import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import ShopList from "./components/ShopList";
import Homepage from "./components/Homepage";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Topbar />

      <Switch>
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/products" component={ShopList} />
        <Route path="/" component={Homepage} />
      </Switch>

      <Bottombar />
    </div>
  );
}

export default App;
