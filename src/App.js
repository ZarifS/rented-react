import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import NavBar from "./containers/Navbar";
import PropertiesList from "./containers/PropertiesList";
import axios from "axios";
import ViewProperty from "./containers/ViewProperty";
import CreateProperty from "./containers/CreateProperty";
import UpdateProperty from "./containers/UpdateProperty";
import ViewProfile from "./containers/ViewProfile";
import VisitingList from "./containers/VisitingList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseUser: null,
      ownedProperties: []
    };
  }

  setProperties = val => {
    this.setState({ ownedProperties: val });
  };

  setUser = val => {
    this.setState({ firebaseUser: val }, () => {
      if (this.state.firebaseUser) {
        const { uid } = this.state.firebaseUser;
        axios
          .get("http://localhost:8000/api/getListings/" + uid)
          .then(res => {
            let data = res.data;
            this.setState({ ownedProperties: data });
          })
          .catch(e => {
            console.log("error: ", e.message);
          });
      } else {
        this.setState({ ownedProperties: [] });
      }
    });
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
              render={props => (
                <PropertiesList
                  {...props}
                  user={this.state.firebaseUser}
                  isAuthed={true}
                  properties={this.state.ownedProperties}
                />
              )}
            />
            <Route
              path="/view/property"
              exact
              render={props => <ViewProperty {...props} isAuthed={true} />}
            />
            <Route
              path="/create/property"
              exact
              render={props => (
                <CreateProperty
                  user={this.state.firebaseUser}
                  setProperties={this.setProperties}
                  {...props}
                  isAuthed={true}
                />
              )}
            />
            <Route
              path="/update/property"
              exact
              render={props => (
                <UpdateProperty
                  user={this.state.firebaseUser}
                  listing_id="RR3E5ArWvSyF2AUWyO9D"
                  {...props}
                  isAuthed={true}
                />
              )}
            />
            <Route
              path="/profile/rented"
              exact
              render={props => <PropertiesList {...props} isAuthed={true} />}
            />
            <Route
              path="/profile/visitList"
              exact
              render={props => (
                <VisitingList
                  user={this.state.firebaseUser}
                  {...props}
                  isAuthed={true}
                />
              )}
            />
            <Route
              path="/profile/edit"
              exact
              render={props => (
                <ViewProfile
                  user={this.state.firebaseUser}
                  setUser={this.setUser}
                  {...props}
                  isAuthed={true}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
