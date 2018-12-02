import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu
} from "@material-ui/core/";
import { AccountCircle } from "@material-ui/icons/";
import NavDrawer from "./NavDrawer";
import { Link } from "react-router-dom";
import ModalWrapper from "../components/ModalWrapper";
import Login from "./Login";
import SignUp from "./SignUp";

import firebase from "firebase";
const config = require("../secret-keys/rented-project-key.json");
firebase.initializeApp(config);
const authorized = firebase.auth();

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  componentDidMount = () => {
    authorized.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log("firebaseUser: ", firebaseUser);
        this.props.setUser(firebaseUser);
      } else {
        console.log("not logged in");
        this.props.setUser(null);
      }
    });
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogoutClose = () => {
    authorized.signOut();
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const auth = this.props.user === null ? false : true;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <NavDrawer user={this.props.user} />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Rented
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>
                    <Link to="/profile/setup">Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleLogoutClose}>
                    <Link to="/profile/logout">Logout</Link>
                  </MenuItem>
                </Menu>
              </div>
            )}
            {!auth && (
              <div>
                <ModalWrapper description="Login">
                  <Login logIn={this.props.logIn} auth={authorized} />
                </ModalWrapper>
                <ModalWrapper description="Sign up">
                  <SignUp signUp={this.props.signUp} auth={authorized} />
                </ModalWrapper>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: 20
  },
  grow: {
    flexGrow: 1
  }
};

export default withStyles(styles)(NavBar);
