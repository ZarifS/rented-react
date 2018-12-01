import React, {Component} from 'react';
import {FormControl, FormGroup } from 'react-bootstrap';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import AutoComplete from 'material-ui/AutoComplete';



 class Search extends Component {
    constructor(props) {
      super(props)

      this.state = {
        value: "",
        properties: []
      };
    }

    handleChange = (e) => {
      this.setState({ value: e});
    }

    handleSubmit = () => {
        // alert('Endpoint: );
        // fetch()
        // .then(response => {
        //     return response.json();
        // }).then(results => {
        //   let properties = results.items.map((item) => {
        //      return(
        //        {
        //          
        //        }
        //      )
        //    })
        //   this.setState({properties: properties})
        this.props.callbackFromParent(this.state.value);
        // })
      }

    render() {
      return (
      <div>
        <MuiThemeProvider>
        <SearchBar
          onChange={this.handleChange}
          onRequestSearch={this.handleSubmit}
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