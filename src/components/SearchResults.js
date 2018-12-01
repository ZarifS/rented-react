import styled from "styled-components";
import React, { Component } from "react";
import Search from '../components/Search';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
    KeyboardBackspaceRounded
  } from "@material-ui/icons";

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

  const HorizontalWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const ReturnArrow = styled(KeyboardBackspaceRounded)`
    padding-top: 10px;
    font-size: 50px;
  `;

class SearchResults extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
      //fetch properties
  }

  render() {
    const { classes } = this.props;
    return (
    <Grid container spacing={24}>
        <Grid item xs={12}>
            <HorizontalWrapper>
                <ReturnArrow onClick={()=>this.props.callbackFromParent(false)}/>
                <h3> Search results for "{this.props.searchValue}" </h3>
            </HorizontalWrapper>
        </Grid>
        {[0].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>Property</Paper>
              </Grid>
            ))}
    </Grid>
    );
  }
}

export default withStyles(styles)(SearchResults);
