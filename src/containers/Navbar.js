import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ModalWrapper from "../components/ModalWrapper";

class NavBar extends Component {
  render = () => {
    return (
      <nav style={{ ...styles.navBarWrapper }}>
        <ModalWrapper description="Login">
          <Login />
        </ModalWrapper>
        <ModalWrapper description="Sign Up">
          <SignUp />
        </ModalWrapper>
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
