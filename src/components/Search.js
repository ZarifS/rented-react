import React, {Component} from 'react';
import {FormControl, FormGroup } from 'react-bootstrap';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import AutoComplete from 'material-ui/AutoComplete';



 class Search extends Component {
    constructor(props) {
      super(props)
    }

    handleChange = (e) => {
      this.props.callbackFromParent(e);
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
        </MuiThemeProvider>
      </div>
      );
    }
  }

  export default Search;