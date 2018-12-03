import React, {Component} from 'react';
import {FormControl, FormGroup } from 'react-bootstrap';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import AutoComplete from 'material-ui/AutoComplete';
import Select from 'react-select';

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px auto;
  max-width: 800px;
`

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
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' },
  { value: 'house', label: 'House' },
]

const locationOptions = [
  { value: 'ottawa', label: 'Ottawa' },
  { value: 'gatineau', label: 'Gatineau' },
  { value: 'toronto', label: 'Toronto' },
]


 class Search extends Component {
    constructor(props) {
      super(props)
    }

    handleChange = (e) => {
      this.props.callbackSV(e);
    }

    handleBedrooms = (e) => {
      this.props.callbackBed(e.target.value);
    }

    handleBathrooms = (e) => {
      this.props.callbackBath(e.target.value);
    }

    handleLocation = (e) => {

    }
    
    handleType = (e) => {

    }

    handleMinRent = (e) => {

    }

    handleMaxRent = (e) => {

    }

    render() {
      return (
      <div>
        <MuiThemeProvider>
        <SearchBar
          onChange={this.handleChange}
          style={{
            margin: '15px auto',
            maxWidth: 800
          }}
          hintText={"Search for a Property"}
        />
        <HorizontalWrapper>
          <FilterByText>Filter By: </FilterByText>
          <Input type="number" name="bedrooms" placeholder="Bedrooms" onChange={this.handleBedrooms}></Input>
          <Input type="number" name="bathrooms" placeholder="Bathrooms" onChange={this.handleBathrooms}></Input>
          <CustomSelect placeholder={"Location"} options={locationOptions}/>
          <CustomSelect placeholder={"Type"} options={typeOptions}/>
          <Input type="number" name="max rent" placeholder="Max Rent"></Input>
          <Input type="number" name="min rent" placeholder="Min Rent"></Input>
        </HorizontalWrapper>
        </MuiThemeProvider>
      </div>
      );
    }
  }

  export default Search;