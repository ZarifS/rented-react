import styled from "styled-components";
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AutoComplete from "material-ui/AutoComplete/AutoComplete";

const styles = theme => ({
    root: {
      flexGrow: 1,
    },

    paperExploreSection: {
        height: 300,
        textAlign: 'center',
        justifyContent: 'center',
    },

    paperFeaturedSection: {
      height: 300,
    },

    paperRecommendedSection: {
        height: 250,
        width: 200,
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
            <Paper className={classes.paperExploreSection}> EXPLORE </Paper>
        </Grid>
        <Grid item xs={12}>
            <h3>Featured </h3>
        </Grid>
            {[0, 1, 2].map(value => (
              <Grid key={value} item xs={4}>
                <Paper className={classes.paperFeaturedSection}>Property</Paper>
              </Grid>
            ))}
        <Grid item xs={12}>
            <h3>Recommended for you</h3>
        </Grid>
            {[0, 1, 2, 3, 4].map(value => (
              <Grid key={value} item>
              <Paper className={classes.paperRecommendedSection} />
              </Grid>
            ))}
        </Grid>
    );
  }
}

export default withStyles(styles)(Featured);
