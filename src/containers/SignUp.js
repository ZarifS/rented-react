import styled from "styled-components";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      accountType: "user",
      street: "",
      city: "",
      street_number: "",
      country: "",
      province: "",
      postal_code: "",
      unit_number: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = () => {
    if (!this.areInputFormsEmpty()) {
      //register User
      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.email);
      console.log(this.state.password);
      let userToAdd = {
        is_agent: this.state.accountType === "user" ? false : true,
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        street: this.state.street,
        city: this.state.city,
        street_number: this.state.street_number,
        country: this.state.country,
        province: this.state.province,
        postal_code: this.state.postal_code,
        unit_number: this.state.unit_number
      };
      console.log(userToAdd);
      axios
        .post("http://localhost:8000/api/createUser", userToAdd)
        .then(res => {
          const { uid } = res.data;
          console.log(uid);
          const url = "http://localhost:8000/api/getUser/" + uid;
          axios
            .get(url)
            .then(res => {
              let userToSet = { ...res.data };
              userToSet.uid = uid;
              this.props.setUser(userToSet);
            })
            .catch(err => {
              console.log("error in GET user call: ", err);
            });
        })
        .catch(err => {
          console.log("error in axios call", err);
        });
    } else {
      console.log("Please fill in all fields");
    }
  };

  areInputFormsEmpty = () => {
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.street === "" ||
      this.state.city === "" ||
      this.state.street_number === "" ||
      this.state.country === "" ||
      this.state.province === "" ||
      this.state.postal_code === ""
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
          name="firstName"
          placeholder="First Name"
          defaultChecked={this.state.firstName}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="lastName"
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
          type="password"
          name="password"
          placeholder="Password"
          defaultChecked={this.state.password}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="street_number"
          placeholder="Street Number"
          defaultChecked={this.state.street_number}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="unit_number"
          placeholder="Unit Number (if applicable)"
          defaultChecked={this.state.unit_number}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="street"
          placeholder="Street"
          defaultChecked={this.state.street}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          defaultChecked={this.state.city}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="province"
          placeholder="Province"
          defaultChecked={this.state.province}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          defaultChecked={this.state.country}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          defaultChecked={this.state.postal_code}
          onChange={this.handleChange}
        />

        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel>Account Type</InputLabel>
            <Select
              value={this.state.accountType}
              onChange={this.handleChange}
              inputProps={{
                name: "accountType"
              }}
            >
              <MenuItem value={"user"}>User</MenuItem>
              <MenuItem value={"agent"}>Agent</MenuItem>
            </Select>
          </FormControl>
        </form>

        <SubmitBtn onClick={this.registerUser}>Sign Up</SubmitBtn>
      </FormContainer>
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
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

export default withStyles(styles)(SignUp);
