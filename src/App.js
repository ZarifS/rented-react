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
      user: { name: "Unaiz" }
    };
  }

  setUser = user => {
    this.setState({ user });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.state.user} setUser={this.setUser} />
          <Route path="/" exact component={Home} />
          <Route
            path="/ownerProperties"
            exact
            render={props => <PropertiesList {...props} isAuthed={true} />}
          />
          <Route
            path="/rentedProperties"
            exact
            render={props => <PropertiesList {...props} isAuthed={true} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
