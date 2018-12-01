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
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
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

  const ExploreImage = styled.img`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  `

  const ExploreButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    color: gray;
    font-size: 12px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 800;
  `;


class Explore extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { classes } = this.props;


    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
            <Paper className={classes.paperExploreSection}> 
                <ExploreImage src={require('../images/explore.jpg')}/>
                <ExploreButton>EXPLORE PROPERTIES ></ExploreButton>
            </Paper>
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

export default withStyles(styles)(Explore);
