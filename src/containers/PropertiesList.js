import React, { Component } from "react";
import SingleProperty from "../components/SingleProperty";

class PropertiesList extends Component {
  renderProperties = () => {
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
    let jsxProperties = [];
    properties.forEach((property, index) => {
      jsxProperties.push(<SingleProperty key={index} property={property} />);
    });
    return <div>{jsxProperties}</div>;
  };
  render = () => {
    return <div className="container">{this.renderProperties()}</div>;
  };
}

export default PropertiesList;
