import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./containers/Test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
