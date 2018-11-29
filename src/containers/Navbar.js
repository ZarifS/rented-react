import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ModalWrapper from "../components/ModalWrapper";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render = () => {
    return (
      <nav
        style={{ ...styles.navBarWrapper }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <a className="navbar-brand" href="/">
          Rented
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <ModalWrapper description="Login">
                <Login />
              </ModalWrapper>
            </li>
            <li className="nav-item active">
              <ModalWrapper description="Sign up">
                <SignUp />
              </ModalWrapper>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
}

const styles = {
  navBarWrapper: {
    borderBottom: "1px lightgrey solid"
  }
};

export default NavBar;
