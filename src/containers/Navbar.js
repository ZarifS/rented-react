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

class NavBar extends Component {
  constructor(props) {
    super(props);
    let auth = this.props.user ? true : false;
    this.state = {
      auth: auth,
      anchorEl: null
    };
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <NavDrawer user={this.props.user} />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Rented
            </Typography>
            {this.state.auth && (
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
                    <Link to="/profile">Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
            {!this.state.auth && (
              <div>
                <ModalWrapper description="Login">
                  <Login />
                </ModalWrapper>
                <ModalWrapper description="Sign up">
                  <SignUp />
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
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

export default withStyles(styles)(NavBar);
