import styled from "styled-components";
import React, { Component } from "react";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 50px;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding-left: 5px;
  height: 40px;
  width: 500px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitBtn = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 510px;
  border-radius: 5px;
  background-color: #ff5a5f;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const LineSeperator = styled.hr`
  border: 1px solid D3D3D3;
  width: 510px;
  margin: 30px 0px;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.text`
  font-size: 16px;
`;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      open: false
    };
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateUser = () => {
    if (!this.areInputFormsEmpty()) {
      //validated user
      console.log(this.state.email);
      console.log(this.state.password);
    } else {
      console.log("Invalid Email or Password");
    }
  };

  areInputFormsEmpty = () => {
    if (this.state.email === "" || this.state.password === "") {
      return true;
    }
    return false;
  };

  render() {
    return (
      <FormContainer>
        <Input
          type="text"
          name="email"
          placeholder="Email Address"
          defaultChecked={this.state.email}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="password"
          placeholder="Password"
          defaultChecked={this.state.password}
          onChange={this.handleChange}
        />
        <SubmitBtn onClick={this.validateUser}>Log in</SubmitBtn>
        <LineSeperator />
        <HorizontalWrapper>
          <Text>Dont have an account? Sign Up</Text>
        </HorizontalWrapper>
      </FormContainer>
    );
  }
}

export default Login;
