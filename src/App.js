import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import NavBar from "./containers/Navbar";
import PropertiesList from "./containers/PropertiesList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseUser: null
    };
  }

  setUser = val => {
    this.setState({ firebaseUser: val });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.state.firebaseUser} setUser={this.setUser} />
          <div className="container">
            <Route
              path="/"
              exact
              render={props => (
                <Home
                  {...props}
                  isAuthed={true}
                  user={this.state.firebaseUser}
                />
              )}
            />
            <Route
              path="/profile/owned"
              exact
              render={props => <PropertiesList {...props} isAuthed={true} />}
            />
            <Route
              path="/profile/rented"
              exact
              render={props => <PropertiesList {...props} isAuthed={true} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
