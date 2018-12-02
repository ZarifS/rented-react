import React, { Component } from "react";
import PropertiesList from "../containers/PropertiesList";
import BrowseProperties from "../containers/BrowseProperties";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    };
  }
  componentDidMount = () => {
    axios.get("http://localhost:8000/api/getListings").then(res => {
      let { data } = res;
      if (data) {
        this.setState({ properties: data }, () => {
          console.log("Set properties to : ", this.state.properties);
        });
      }
    });
  };

  render = () => {
    return (
      <div className="container">
        <PropertiesList properties={this.state.properties} />
      </div>
    );
  };
}

export default Home;
