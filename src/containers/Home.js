import React, { Component } from "react";
import PropertiesList from "../containers/PropertiesList";
import BrowseProperties from "./BrowseProperties";

class Home extends Component {
  render = () => {
    let properties = [
      {
        name: "Hillton flats",
        address: "1674 GreyNuns Drive"
      },
      {
        name: "Malibu apartments",
        address: "16 Washington drive"
      }
    ];
    return (
      <div className="container">
        <BrowseProperties/>
      </div>
    );
  };
}

export default Home;
