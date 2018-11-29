import React, { Component } from "react";

class SingleProperty extends Component {
  render = () => {
    let property = { ...this.props.property };
    return (
      <p>
        This is a single property from {property.address} called {property.name}
      </p>
    );
  };
}

export default SingleProperty;
