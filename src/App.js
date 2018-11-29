import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./containers/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
        </Router>
      </div>
    );
  }
}

export default App;
