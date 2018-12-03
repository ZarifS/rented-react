import styled from "styled-components";
import React, { Component } from "react";
import Search from "../components/Search";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CustomPaper from "../components/CustomPaper";
import SingleProperty from "../components/SingleProperty";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 300,
    width: 250
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class BrowseProperties extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [],
      searchValue: "",
      bathRoomFilter: 0,
      bedRoomFilter: 0,
      locationFilter: "",
      typeFilter: "",
      minRentFilter: 0,
      maxRentFilter: 10000000
    };

    this.searchValueCallBack = dataFromChild => {
      this.setState({ searchValue: dataFromChild });
    };

    this.bathRoomCallBack = dataFromChild => {
      this.setState({ bathRoomFilter: dataFromChild });
    };

    this.bedRoomCallBack = dataFromChild => {
      this.setState({ bedRoomFilter: dataFromChild });
    };

    this.locationCallBack = dataFromChild => {
      this.setState({ locationFilter: dataFromChild });
    };

    this.typeCallBack = dataFromChild => {
      this.setState({ typeFilter: dataFromChild });
    };

    this.minRentCallBack = dataFromChild => {
      this.setState({ minRentFilter: dataFromChild });
    };

    this.maxRentCallBack = dataFromChild => {
      this.setState({ maxRentFilter: dataFromChild });
    };
  }

  render() {
    const { classes } = this.props;

    if (!this.props.properties || this.props.properties.length < 1) {
      return <div />;
    }

    let filterByName = this.props.properties.filter(property =>
      property.title
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase())
    );
    if (this.state.searchValue == "" || this.state.searchValue.length < 1) {
      filterByName = this.props.properties;
    }
    let filterByBedroom = filterByName.filter(
      property => property.bedrooms >= parseInt(this.state.bedRoomFilter)
    );
    let filterByBathroom = filterByBedroom.filter(
      property => property.bathrooms >= parseInt(this.state.bathRoomFilter)
    );
    let filterByMinRent = filterByBathroom.filter(
      property => property.rent >= parseInt(this.state.minRentFilter)
    );
    let filterByMaxRent = filterByMinRent.filter(
      property => property.rent <= parseInt(this.state.maxRentFilter)
    );
    let filterByLocation = filterByMaxRent.filter(property =>
      property.city.toLowerCase().includes(this.state.locationFilter)
    );
    let filteredproperties = filterByLocation.filter(property =>
      property.type.toLowerCase().includes(this.state.typeFilter)
    );

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Search
              callbackSV={this.searchValueCallBack}
              callbackBed={this.bedRoomCallBack}
              callbackBath={this.bathRoomCallBack}
              callbackLocation={this.locationCallBack}
              callbackType={this.typeCallBack}
              callbackMinRent={this.minRentCallBack}
              callbackMaxRent={this.maxRentCallBack}
            />
          </Grid>
          <Grid item xs={12}>
            <h3>Browse </h3>
          </Grid>
          {filteredproperties.map((property, index) => (
            <Grid key={index} item xs={6}>
              <SingleProperty user={this.props.user} property={property} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(BrowseProperties);
