import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import NavBar from "./containers/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route
            style={{ ...styles.routeWrapper }}
            path="/"
            exact
            component={Home}
          />
        </div>
      </Router>
    );
  }
}

const styles = {
  routeWrapper: {
    padding: "0px"
  }
};

export default App;
