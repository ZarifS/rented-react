import styled from "styled-components";
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


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

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      accountType: 'user',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  registerUser = () => {
    if (!this.areInputFormsEmpty()) {
      //register User
      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.email);
      console.log(this.state.password);
    } else {
      console.log("Please fill in all fields");
    }
  };

  areInputFormsEmpty = () => {
    if (
      this.state.firstName === "" ||
      (this.state.lastName === "") || (this.state.email === "") ||
      this.state.password === ""
    ) {
      return true;
    }
    return false;
  };

  render() {
    const { classes } = this.props;
    return (
      <FormContainer>
        <Input
          type="text"
          name="firstname"
          placeholder="First Name"
          defaultChecked={this.state.firstName}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="firstname"
          placeholder="Last Name"
          defaultChecked={this.state.lastName}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email Address"
          defaultChecked={this.state.email}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="Create a password"
          placeholder="Password"
          defaultChecked={this.state.password}
          onChange={this.handleChange}
        />
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel>Account Type</InputLabel>
            <Select
              value={this.state.accountType}
              onChange={this.handleChange}
              inputProps={{
                name: 'accountType',
              }}
            >
              <MenuItem value={'user'}>User</MenuItem>
              <MenuItem value={'agent'}>Agent</MenuItem>
            </Select>
          </FormControl>
        </form>
        <SubmitBtn onClick={this.registerUser}>Sign Up</SubmitBtn>
        <LineSeperator />
        <HorizontalWrapper>
          <Text>Already have an account? Log in</Text>
        </HorizontalWrapper>
      </FormContainer>
    );
  }
}

export default withStyles(styles)(SignUp);
