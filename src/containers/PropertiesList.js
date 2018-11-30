import React, { Component } from "react";
import SingleProperty from "../components/SingleProperty";
import PropTypes from "prop-types";

class PropertiesList extends Component {
  renderProperties = () => {
    let properties = this.props.properties || [];
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

PropertiesList.propTypes = {
  properties: PropTypes.array.isRequired
};

export default PropertiesList;
