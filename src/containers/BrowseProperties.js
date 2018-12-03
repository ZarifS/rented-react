import styled from "styled-components";
import React, { Component } from "react";
import Search from '../components/Search';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Explore from '../components/Explore';
import SearchResults from '../components/SearchResults';
import axios from 'axios';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 300,
      width: 250,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });


class BrowseProperties extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [],
      isSearchResultsVisible: false,
      searchValue: ""
    };

    this.searchResultsCallback = (dataFromChild) => {
        this.setState({isSearchResultsVisible: dataFromChild})
    }

    this.searchBarCallback = (dataFromChild) => {
        this.setState({isSearchResultsVisible: true})
        this.setState({searchValue: dataFromChild});
    }

    this.exploreCallback = () => {
      this.setState({isSearchResultsVisible: true})
      this.setState({searchValue: 'All Properties'})
    }
  }

  componentDidMount(){
      this.setState({
          isSearchResultsVisible: false
      });

      axios.get('http://localhost:8000/api/getListings')
      .then(response => {
        let properties = response.data;
        console.log("fetched properties: "+ JSON.stringify(properties));
        this.setState({
          properties: properties,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const { classes } = this.props;


    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
            <Grid item xs={12}>
                <Search callbackFromParent={this.searchBarCallback}/>
            </Grid>
            {this.state.isSearchResultsVisible ? <SearchResults properties={this.state.properties} searchValue={this.state.searchValue} callbackFromParent={this.searchResultsCallback}/> :<Explore properties={this.state.properties} callbackFromParent={this.exploreCallback}/>}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(BrowseProperties);
