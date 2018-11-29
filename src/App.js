import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import NavBar from "./containers/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
