import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ModalWrapper from "./ModalWrapper";

class NavBar extends Component {
  render = () => {
    return (
      <div style={{ ...styles.navBarWrapper }}>
        <ModalWrapper description="Login">
          <Login />
        </ModalWrapper>
        <ModalWrapper description="Sign Up">
          <SignUp />
        </ModalWrapper>
      </div>
    );
  };
}

const styles = {
  navBarWrapper: {
    border: "1px black solid",
    padding: "20px"
  }
};

export default NavBar;
