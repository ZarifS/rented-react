import React, { Component } from "react";
import SingleProperty from "../components/SingleProperty";
import PropTypes from "prop-types";
import axios from "axios";

class PropertiesList extends Component {
  constructor(props) {
    super(props);
  }

  renderProperties = () => {
    if (this.props.properties) {
      let jsxProperties = [];
      this.props.properties.forEach((property, index) => {
        jsxProperties.push(
          <SingleProperty
            owned={this.props.owned}
            key={index}
            property={property}
          />
        );
      });
      return jsxProperties;
    } else {
      return <div>You don't have any properties in this category</div>;
    }
  };

  render = () => {
    return <div className="container">{this.renderProperties()}</div>;
  };
}

export default PropertiesList;
