import styled from "styled-components";
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CustomPaper from '../components/CustomPaper';
import AutoComplete from "material-ui/AutoComplete/AutoComplete";

const styles = theme => ({
    root: {
      flexGrow: 1,
    },

    control: {
      padding: theme.spacing.unit * 2,
    },
  });

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


  const Title = styled.span`
    font-size: 20px;
    font-weight: 800;
    color: white;
  `;

  const Price = styled.span`
    font-size: 16px;
    padding: 12px 24px;
    font-weight: 600;
    z-index: 100;
  `



class Explore extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
            <CustomPaper height={300} image={require('../images/explore.jpg')}> 
                <ExploreButton>EXPLORE PROPERTIES ></ExploreButton>
            </CustomPaper>
        </Grid>
        <Grid item xs={12}>
            <h3>Featured </h3>
        </Grid>
            {[0, 1, 2].map(value => (
              <Grid key={value} item xs={4}>
                <CustomPaper height={300} image={require('../images/explore.jpg')}>
                    <Title>Ottawa</Title>
                    <Price>$138/night</Price>
                </CustomPaper>
              </Grid>
            ))}
        <Grid item xs={12}>
            <h3>Recommended for you</h3>
        </Grid>
            {[0, 1, 2, 3].map(value => (
              <Grid key={value} item xs={3}>
                <CustomPaper height={250} image={require('../images/explore.jpg')}>
                      <Title>Ottawa</Title>
                      <Price>$138/night</Price>
                </CustomPaper>
              </Grid>
            ))}
        </Grid>
    );
  }
}

export default withStyles(styles)(Explore);
