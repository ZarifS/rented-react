import React, { Component } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import styled from "styled-components";
import AutoComplete from "material-ui/AutoComplete";
import Select from "react-select";

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px auto;
  max-width: 800px;
`;

const FilterByText = styled.span`
  margin-right: 5px;
  padding-top: 5px;
`;

const Input = styled.input`
  width: 100px;
  margin: 0 5px;
  border-radius: 5px;
`;

const CustomSelect = styled(Select)`
  margin: 0 5px;
  width: 120px;
`;

const typeOptions = [
  { value: "", label: "All" },
  { value: "apartment", label: "Apartment" },
  { value: "condo", label: "Condo" },
  { value: "house", label: "House" }
];

const locationOptions = [
  { value: "", label: "All" },
  { value: "ottawa", label: "Ottawa" },
  { value: "gatineau", label: "Gatineau" },
  { value: "toronto", label: "Toronto" }
];

class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.props.callbackSV(e);
  };

  handleBedrooms = e => {
    if (e.target.value == "") {
      this.props.callbackBed(0);
    } else {
      this.props.callbackBed(e.target.value);
    }
  };

  handleBathrooms = e => {
    if (e.target.value == "") {
      this.props.callbackBath(0);
    } else {
      this.props.callbackBath(e.target.value);
    }
  };

  handleLocation = e => {
    this.props.callbackLocation(e.value);
  };

  handleType = e => {
    this.props.callbackType(e.value);
  };

  handleMinRent = e => {
    if (e.target.value == "") {
      this.props.callbackMinRent(0);
    } else {
      this.props.callbackMinRent(e.target.value);
    }
  };

  handleMaxRent = e => {
    if (e.target.value == "") {
      this.props.callbackMaxRent(0);
    } else {
      this.props.callbackMaxRent(e.target.value);
    }
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <SearchBar
              onChange={this.handleChange}
              style={{
                margin: "15px auto",
                maxWidth: 800
              }}
              onRequestSearch={() => {}}
              hintText={"Search for a Property"}
            />
            <HorizontalWrapper>
              <FilterByText>Filter By: </FilterByText>
              <Input
                type="number"
                name="bedrooms"
                placeholder="Bedrooms"
                onChange={this.handleBedrooms}
              />
              <Input
                type="number"
                name="bathrooms"
                placeholder="Bathrooms"
                onChange={this.handleBathrooms}
              />
              <CustomSelect
                placeholder={"Location"}
                options={locationOptions}
                onChange={this.handleLocation}
              />
              <CustomSelect
                placeholder={"Type"}
                options={typeOptions}
                onChange={this.handleType}
              />
              <Input
                type="number"
                name="min rent"
                placeholder="Min Rent"
                onChange={this.handleMinRent}
              />
              <Input
                type="number"
                name="max rent"
                placeholder="Max Rent"
                onChange={this.handleMaxRent}
              />
            </HorizontalWrapper>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Search;
