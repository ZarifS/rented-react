import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import { Button, IconButton } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import { Bookmark, HotelRounded, HotTubRounded } from "@material-ui/icons";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

class SingleProperty extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  createPictureUrls = () => {
    let { picture_urls } = this.props.property;
    let result = [];
    for (let urlKey in picture_urls) {
      result.push(
        <div>
          <img src={picture_urls[urlKey]} />
        </div>
      );
    }
    return result;
  };

  render() {
    const { classes } = this.props;
    const property = { ...this.props.property };
    const avatarName = property.city.charAt(0).toUpperCase();
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>{avatarName}</Avatar>}
          action={
            <IconButton
              onClick={() => {
                // TODO: Implement add to visitation List.
                console.log("Add to visitation list");
              }}
            >
              <Bookmark />
            </IconButton>
          }
          title={property.title}
          subheader={property.street_number + " " + property.street}
        />
        <Carousel>{this.createPictureUrls()}</Carousel>
        <CardContent>
          <ListingDetails>
            <HorizontalWrapper>
              <HotelRounded />
              <DetailsText> Bedrooms: {property.bedrooms} </DetailsText>
            </HorizontalWrapper>
            <HorizontalWrapper>
              <HotTubRounded />
              <DetailsText> Bathrooms: {property.bathrooms} </DetailsText>
            </HorizontalWrapper>
            <HorizontalWrapper>
              <HotTubRounded />
              <DetailsText> Other Rooms: {property.otherRooms} </DetailsText>
            </HorizontalWrapper>
          </ListingDetails>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Price>
            {property.rent}
            <Text>/Month</Text>
          </Price>
          <Button
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
          >
            Rent
          </Button>
        </CardActions>
      </Card>
    );
  }
}

SingleProperty.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  card: {
    marginBottom: "20px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    },
    border: "1px lightgrey solid"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

const ListingDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailsText = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 8px;
  margin-left: 10px;
  font-size: 11px;
`;
const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

const RentButton = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 510px;
  border-radius: 5px;
  background-color: #ff5a5f;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Text = styled.span`
  font-size: 12px;
`;

const Price = styled.span`
  z-index: 100;
  font-weight: 600;
  font-size: 30px;
`;

export default withStyles(styles)(SingleProperty);
