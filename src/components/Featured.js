import styled from "styled-components";
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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


class Featured extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { classes } = this.props;


    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
            <h3>Featured </h3>
        </Grid>
        {[0, 1, 2, 3].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>Property</Paper>
              </Grid>
            ))}
        <Grid item xs={12}>
            <h3>Recommended for you</h3>
        </Grid>
            {[0, 1, 2, 3].map(value => (
              <Grid key={value} item>
              <Paper className={classes.paper} />
              </Grid>
            ))}
        </Grid>
    );
  }
}

export default withStyles(styles)(Featured);
