import styled from "styled-components";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";

const Row = styled.li`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  container1: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  checkBox: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 300
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  snackbar: {
    position: "fixed"
  },
  close: {
    padding: theme.spacing.unit / 2
  }
});
const types = [
  {
    value: "House",
    label: "House"
  },
  {
    value: "Apartment",
    label: "Apartment"
  }
];
class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Apartment",
      title: "",
      street: "",
      streetNumber: "",
      city: "",
      province: "",
      country: "",
      postalCode: "",
      numBedrooms: 0,
      numBathrooms: 0,
      numOtherRooms: 0,
      rent: 0,
      pic1: "",
      pic2: "",
      pic3: "",
      pic4: "",
      pic5: "",
      errMessage: "",
      available: false,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  //   fileUpload = () => {
  //     const currImages = this.state.allImages;
  //     for (var i = 0; i < this.state.image.length; i++) {
  //       var fd = new FormData();
  //       fd.append(
  //         "image" + i.toString(),
  //         this.state.image[i],
  //         this.state.image[i].name
  //       );
  //       currImages.push(fd);
  //     }

  //     this.setState({ allImages: currImages });
  //   };
  //   fileHandler(e) {
  //     let allfiles = e.target.files;
  //     let files = [];
  //     let urls = [];

  //     for (var i = 0; i < allfiles.length; i++) {
  //       files[i] = allfiles.item(i);
  //     }
  //     files = files.filter(image => image.name.match(/\.(jpg|jpeg|png)$/));
  //     let message = "";
  //     if (files.length > 5) {
  //       message = "You are only allowed to upload 5 images ";
  //     }
  //     for (var j = 0; j < files.length; j++) {
  //       let reader = new FileReader();
  //       if (files[j].size > 5000000) {
  //         message = "File size exceeded 5 mb";
  //         break;
  //       }
  //       reader.readAsDataURL(files[j]);
  //       reader.onload = () => {
  //         urls.push(reader.result);
  //         this.setState({
  //           imageURLS: urls
  //         });
  //       };
  //     }

  //     this.setState({
  //       image: files,
  //       errMessage: message
  //     });
  //   }
  handleCheck() {
    this.setState({
      available: !this.state.available
    });
  }
  handleChange(e) {
    this.setState({ type: e.target.value });
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  handleSubmit(e) {
    var valid = this.validateInput();
    const url = "http://localhost:8000/api/addListing";
    if (valid) {
      let user = this.props.user;
      if (user) {
        const property1 = {
          owner_uid: user.uid,
          title: this.state.title,
          street: this.state.street,
          street_number: this.state.streetNumber,
          city: this.state.city,
          province: this.state.province,
          country: this.state.country,
          postal_code: this.state.postalCode,
          bathrooms: parseInt(this.state.numBathrooms),
          bedrooms: parseInt(this.state.numBedrooms),
          otherRooms: parseInt(this.state.numOtherRooms),
          rent: parseInt(this.state.rent),
          type: this.state.type,
          available: this.state.available,
          picture_urls: {
            main: this.state.pic1,
            pic2: this.state.pic2,
            pic3: this.state.pic3,
            pic4: this.state.pic4,
            pic5: this.state.pic5
          }
        };
        console.log(property1);
        axios
          .post(url, property1)
          .then(res => {
            console.log(res);
            console.log(res.data);
            axios
              .get("http://localhost:8000/api/getListings/" + user.uid)
              .then(res => {
                let data = res.data;
                this.props.setProperties(data);
              })
              .catch(e => {
                console.log("error: ", e.message);
              });
          })
          .catch(err => {
            console.log("error in post property call", err);
            this.setState({
              errMessage: "Error when adding property",
              open: true
            });
          });
        this.setState({
          errMessage: "Successfully added Property",
          open: true
        });
        window.location = "http://localhost:3000/";
      } else {
        console.log("Not Logged in");
        this.setState({ errMessage: "Not logged in", open: true });
      }
    } else {
      console.log("Not all fields were filled");
      this.setState({ errMessage: "Not all fields are filled", open: true });
    }

    e.preventDefault();
  }
  validateInput = () => {
    if (
      this.state.street_number === "" ||
      this.state.street === "" ||
      this.state.city === "" ||
      this.state.province === "" ||
      this.state.country === "" ||
      this.state.postalCode === "" ||
      this.state.rent < 0 ||
      this.state.numBathrooms < 0 ||
      this.state.numBedrooms < 0 ||
      this.state.numOtherRooms < 0 ||
      this.state.rent < 0
    ) {
      return false;
    }
    return true;
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <TextField
          error={this.state.title === ""}
          helperText={this.state.title === "" ? "Required!" : " "}
          name="title"
          label="Title"
          className={classes.textField}
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="type"
          select
          label="Property Type"
          className={classes.textField}
          value={this.state.type}
          onChange={this.handleChange}
          SelectProps={{ MenuProps: { className: classes.menu } }}
          helperText="Please select Property Type"
          margin="normal"
          variant="outlined"
        >
          {types.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          error={this.state.street === ""}
          helperText={this.state.street === "" ? "Required!" : " "}
          name="street"
          label="Street"
          className={classes.textField}
          placeholder="Street"
          value={this.state.street}
          onChange={this.handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <div className={classes.container1}>
          <TextField
            error={this.state.streetNumber === ""}
            helperText={this.state.streetNumber === "" ? "Required!" : " "}
            name="streetNumber"
            label="Street Number"
            className={classes.textField}
            placeholder="Street Number"
            value={this.state.streetNumber}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error={this.state.city === ""}
            helperText={this.state.city === "" ? "Required!" : " "}
            name="city"
            label="City"
            className={classes.textField}
            placeholder="City"
            value={this.state.city}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error={this.state.province === ""}
            helperText={this.state.province === "" ? "Required!" : " "}
            name="province"
            label="Province"
            className={classes.textField}
            placeholder="Province"
            value={this.state.province}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error={this.state.country === ""}
            helperText={this.state.country === "" ? "Required!" : " "}
            name="country"
            label="Country"
            className={classes.textField}
            placeholder="Country"
            value={this.state.country}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error={this.state.postalCode === ""}
            helperText={this.state.postalCode === "" ? "Required!" : " "}
            name="postalCode"
            label="Postal Code"
            className={classes.textField}
            placeholder="Postal Code"
            value={this.state.postalCode}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className={classes.container1}>
          <TextField
            error={this.state.numBedrooms === ""}
            name="numBedrooms"
            label="Bedrooms"
            InputLabelProps={{ shrink: true }}
            className={classes.textField}
            type="number"
            value={this.state.numBedrooms}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error={this.state.numBathrooms === ""}
            name="numBathrooms"
            label="Bathrooms"
            InputLabelProps={{ shrink: true }}
            type="number"
            className={classes.textField}
            value={this.state.numBathrooms}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error={this.state.numOtherRooms === ""}
            name="numOtherRooms"
            label="Other Rooms"
            InputLabelProps={{ shrink: true }}
            type="number"
            className={classes.textField}
            value={this.state.numOtherRooms}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error={this.state.rent === ""}
            name="rent"
            label="Rent"
            type="number"
            InputLabelProps={{ shrink: true }}
            className={classes.textField}
            value={this.state.rent}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
          />
        </div>
        <FormControlLabel
          control={
            <Checkbox
              className={classes.checkBox}
              checked={this.state.available}
              onChange={this.handleCheck}
              value="available"
              color="primary"
            />
          }
          label="Available"
        />
        <TextField
          name="pic1"
          label="Picture 1 Link"
          className={classes.textField}
          value={this.state.pic1}
          onChange={this.handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="pic2"
          label="Picture 2 Link"
          className={classes.textField}
          value={this.state.pic2}
          onChange={this.handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="pic3"
          label="Picture 3 Link"
          className={classes.textField}
          value={this.state.pic3}
          onChange={this.handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="pic4"
          label="Picture 4 Link"
          className={classes.textField}
          value={this.state.pic4}
          onChange={this.handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="pic5"
          label="Picture 5 Link"
          className={classes.textField}
          value={this.state.pic5}
          onChange={this.handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <Row>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Add Property
          </Button>
        </Row>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          message={this.state.errMessage}
          action={
            <Button color="inherit" size="small" onClick={this.handleClose}>
              Ok
            </Button>
          }
          className={classes.snackbar}
        />
      </div>
    );
  }
}
CreateProperty.propType = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CreateProperty);
