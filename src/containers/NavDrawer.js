import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Home,
  Assessment,
  Menu,
  AccountBalance,
  ShoppingCart,
  AccountBox,
  Build,
  Bookmark
} from "@material-ui/icons";

const styles = {
  list: {
    width: 250
  }
};

const allNavigationPaths = [
  {
    name: "Browse",
    url: "/",
    icon: <ShoppingCart />
  }
];

const userNavigationPaths = [
  {
    name: "Rentals",
    url: "/profile/rented",
    icon: <AccountBalance />
  },
  {
    name: "Owned Properties",
    url: "/profile/owned",
    icon: <Home />
  },
  {
    name: "Owner Statistics",
    url: "/profile/ownerStatistics",
    icon: <Assessment />
  },
  {
    name: "Visitation List",
    url: "/profile/visitList",
    icon: <Bookmark />
  },
  {
    name: "Manage Properties",
    url: "/profile/editProperties",
    icon: <Build />
  }
];

const accountNavigationPaths = [
  {
    name: "Profile",
    url: "/profile/setup",
    icon: <AccountBox />
  }
];

class NavDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: false };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {allNavigationPaths.map((navObject, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{navObject.icon}</ListItemIcon>
              <Link to={navObject.url}>{navObject.name}</Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {userNavigationPaths.map((navObject, index) => (
            <ListItem
              disabled={this.props.user === null ? true : false}
              button
              key={index}
            >
              <ListItemIcon>{navObject.icon}</ListItemIcon>
              <Link to={navObject.url}>{navObject.name}</Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {accountNavigationPaths.map((navObject, index) => (
            <ListItem
              disabled={this.props.user === null ? true : false}
              button
              key={index}
            >
              <ListItemIcon>{navObject.icon}</ListItemIcon>
              <Link to={navObject.url}>{navObject.name}</Link>
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer("left", true)}>
          <Menu />
        </Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavDrawer);
