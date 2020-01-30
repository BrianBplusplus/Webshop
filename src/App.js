import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import ShopList from "./components/ShopList";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Topbar />

      <Switch>
        <Route path="/products" component={ShopList} />
        <Route path="/" component={Homepage} />
      </Switch>

      <Bottombar />
    </div>
  );
}

export default App;
