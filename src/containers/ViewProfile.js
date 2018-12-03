import styled from "styled-components";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

class ViewProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
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
      //Update User
      let userToAdd = {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.props.user.email,
        is_agent: this.props.user.is_agent,
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
        .patch(
          "http://localhost:8000/api/updateUser/" + this.props.user.uid,
          userToAdd
        )
        .then(res => {
          userToAdd.uid = this.props.user.uid;
          this.props.setUser(userToAdd);
          window.location = "http://localhost:3000/";
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
    const user = { ...this.props.user };
    return (
      <FormContainer>
        <Input
          type="text"
          name="firstName"
          placeholder={"First Name: " + (user ? user.first_name : "")}
          defaultChecked={this.state.firstName}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="lastName"
          placeholder={"Last Name: " + (user ? user.last_name : "")}
          defaultChecked={this.state.lastName}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="street_number"
          placeholder={"Email Address: " + (user ? user.street_number : "")}
          defaultChecked={this.state.street_number}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="unit_number"
          placeholder={user ? user.unit_number : "Unit Number: (if applicable)"}
          defaultChecked={this.state.unit_number}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="street"
          placeholder={"Street: " + (user ? user.street : "")}
          defaultChecked={this.state.street}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="city"
          placeholder={"City: " + (user ? user.city : "")}
          defaultChecked={this.state.city}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="province"
          placeholder={"Province: " + (user ? user.province : "")}
          defaultChecked={this.state.province}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="country"
          placeholder={"Country: " + (user ? user.country : "")}
          defaultChecked={this.state.country}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="postal_code"
          placeholder={"Postal Code: " + (user ? user.postal_code : "")}
          defaultChecked={this.state.postal_code}
          onChange={this.handleChange}
        />

        <SubmitBtn onClick={this.registerUser}>Update Information</SubmitBtn>
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

export default withStyles(styles)(ViewProfile);
