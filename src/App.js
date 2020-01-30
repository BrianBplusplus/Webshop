import React from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import ShopList from "./components/ShopList";

function App() {
  return (
    <div className="App">
      <Topbar />
      <ShopList />
      <Bottombar />
    </div>
  );
}

export default App;
