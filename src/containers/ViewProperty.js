import styled from "styled-components";
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HotelRounded, HotTubRounded, LocationOnRounded,  } from "@material-ui/icons/";

const PropertyInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  background-color: #F2F2F2;
  border-radius: 5px;
`

const PropertyImageContainer = styled.div`
    height: 500px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 25px 25px 25px
`;

const Title = styled.span`
  z-index: 100;
  font-size: 30px;
  font-weight: 800;
  color: #767676;
  text-transform: uppercase;
`;

const Text = styled.span`
  font-size: 12px;
`

const LineSeperator = styled.hr`
  border: 1px solid D3D3D3;
  width: 90%;
`;

const Type = styled.span`
  font-weight: 800;
  font-size: 13px;
`;


const Price = styled.span`
    z-index: 100;
    font-weight: 600;
    font-size: 30px;
`;

const ListingDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailsText = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 8px;
  margin-left: 10px;
  font-size: 11px;
`

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`

const RentButton = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 510px;
  border-radius: 5px;
  background-color: #ff5a5f;
  color: white;
  font-size: 16px;
  font-weight: bold;
`


class ViewProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {

    return (
      <Grid container spacing={24}>
        <Grid item xs={5}>
          <PropertyInfo>
            <ContentContainer>
              <Title>Cozy 4 Bedroom Apartment in Ottawa</Title>
              <Price>
                $1500
                <Text>/Month</Text>
              </Price>
              <Type>Apartment</Type>
              <LineSeperator/>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac posuere metus. 
                Suspendisse ut varius massa. Nullam a sem tortor. Pellentesque bibendum varius hendrerit. 
                Suspendisse scelerisque dictum leo laoreet posuere. Nulla laoreet cursus eros sit amet feugiat. 
                Cras finibus tellus id eros scelerisque lobortis. Sed convallis rutrum facilisis. 
                Maecenas pulvinar odio leo, at accumsan nibh cursus quis. Quisque et dui euismod erat mollis euismod. 
              </Text>
              <ListingDetails>
                <HorizontalWrapper>
                  <LocationOnRounded/>
                  <DetailsText>612 Amelia Place, Ottawa, Ontario, Canada</DetailsText>
                </HorizontalWrapper>
                <HorizontalWrapper>
                  <HotelRounded/>
                  <DetailsText> Bedrooms: 5 </DetailsText>
                </HorizontalWrapper>
                <HorizontalWrapper>
                  <HotTubRounded/>
                  <DetailsText> Bathrooms: 4 </DetailsText>
                </HorizontalWrapper>
                <HorizontalWrapper>
                  <HotTubRounded/>
                  <DetailsText> Other Rooms: 6 </DetailsText>
                </HorizontalWrapper>
                <HorizontalWrapper>
                  <RentButton>Rent</RentButton>
                </HorizontalWrapper>
              </ListingDetails>
            </ContentContainer>
          </PropertyInfo>
        </Grid>
        <Grid item xs={7}>
          <PropertyImageContainer>
            <Carousel>
                    <div>
                        <img src={require('../images/explore.jpg')} />
                    </div>
                    <div>
                        <img src={require('../images/explore.jpg')} />
                    </div>
                    <div>
                        <img src={require('../images/explore.jpg')} />
                    </div>
              </Carousel>
          </PropertyImageContainer>
        </Grid>
    </Grid>
    );
  }
}

export default ViewProperty
