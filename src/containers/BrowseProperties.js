import styled from "styled-components";
import React, { Component } from "react";
import Search from '../components/Search';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Featured from '../components/Featured';
import SearchResults from '../components/SearchResults';

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
  }

  componentDidMount(){
      this.setState({
          isSearchResultsVisible: false
      });
      //fetch properties
  }

  render() {

    const { classes } = this.props;


    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
            <Grid item xs={12}>
                <Search callbackFromParent={this.searchBarCallback}/>
            </Grid>
            {this.state.isSearchResultsVisible ? <SearchResults searchValue={this.state.searchValue} callbackFromParent={this.searchResultsCallback}/> :<Featured/>}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(BrowseProperties);
