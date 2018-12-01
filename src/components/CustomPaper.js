import styled from "styled-components";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({

    paper: {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        textAlign: 'center',
        justifyContent: 'center',
    },
  });

  const StyledPaper = styled(Paper)`
    height: ${props => props.height}px;
  `;

  const Image = styled.img`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    filter: brightness(75%);
  `

  const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 12px 24px;
    z-index: 100;
    color: white;
    width: 50%;
  `

class CustomPaper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
            <StyledPaper className={classes.paper} height={this.props.height}>
                <Image src={this.props.image}/>
                <VerticalWrapper>
                    {this.props.children}
                </VerticalWrapper>
            </StyledPaper>
    );
  }
}

CustomPaper.defaultProps = {
    height: 250,
    transform: 1.00,
}

CustomPaper.propTypes = {
    height: PropTypes.number,
    image: PropTypes.string,
}

export default withStyles(styles)(CustomPaper);