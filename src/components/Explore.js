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
      textAlign: 'center',
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    },

    paperRecommendedSection: {
        height: 250,
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
    },

    control: {
      padding: theme.spacing.unit * 2,
    },
  });

  const Image = styled.img`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    filter: brightness(75%);
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

  const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 12px 24px;
    z-index: 100;
    color: white;
  `

  const StyledPaper = styled(Paper)`
    cursor: pointer;
    transition: all .2s ease-in-out;
    &: hover {
      transform: scale(1.05);
    }
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
                <Image src={require('../images/explore.jpg')}/>
                <ExploreButton>EXPLORE PROPERTIES ></ExploreButton>
            </Paper>
        </Grid>
        <Grid item xs={12}>
            <h3>Featured </h3>
        </Grid>
            {[0, 1, 2].map(value => (
              <Grid key={value} item xs={4}>
                <StyledPaper className={classes.paperFeaturedSection}>
                  <Image src={require('../images/explore.jpg')}/>
                  <VerticalWrapper>
                    <Title>Ottawa</Title>
                    <Price>$138/night</Price>
                  </VerticalWrapper>
                </StyledPaper>
              </Grid>
            ))}
        <Grid item xs={12}>
            <h3>Recommended for you</h3>
        </Grid>
            {[0, 1, 2, 3].map(value => (
              <Grid key={value} item xs={3}>
              <Paper className={classes.paperRecommendedSection}>
                <Image src={require('../images/explore.jpg')}/>
                <VerticalWrapper>
                    <Title>Ottawa</Title>
                    <Price>$138/night</Price>
                  </VerticalWrapper>
              </Paper>
              </Grid>
            ))}
        </Grid>
    );
  }
}

export default withStyles(styles)(Explore);
