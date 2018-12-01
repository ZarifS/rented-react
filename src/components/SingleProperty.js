import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Bookmark } from "@material-ui/icons";

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
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class SingleProperty extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const property = { ...this.props.property };
    const { address, owner } = { ...this.props.property };
    const { profileURL, name } = { ...owner };
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar src={profileURL} alt={name} className={classes.avatar} />
          }
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
          title={property.name}
          subheader={address.streetNumber + " " + address.street}
        />
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            <i className="fas fa-bed fa-lg" />
            <span style={{ fontSize: "16px" }}>
              {"  " + property.numBedrooms + "  "}
            </span>
          </Typography>
          <Typography>
            <i className="fas fa-bath fa-lg" />
            <span style={{ fontSize: "16px" }}>
              {"    " + property.numBedrooms + "  "}
            </span>
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Typography>${property.rentMonthly}</Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{property.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

SingleProperty.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleProperty);
