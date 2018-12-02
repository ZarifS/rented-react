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
const Label = styled.label`
  padding: 0.5em 1em 0.5em 0;
  flex: 1;
`;
// const Label1=styled.label`
//     padding: .5em 1em .5em 0;
//     flex: 2;
//     display:block;
// `;
// const Select=styled.select`
//     flex: 2;
// `;
const Input = styled.input`
  flex: 2;
`;
// const Input1=styled.input`
//     width:15px;
//     height:15px;
//     padding:0;
//     margin:0;
//     position:relative;
// `;
// const Wrap=styled.ul`
//     background-color:whitesmoke;
//     list-style-type: none;
//     padding: 0;
//     border-radius: 2px;
// `;
const Row = styled.li`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
`;
const ImgRow = styled.li`
  display: inline;
  padding: 0.5em;
`;
// const Button=styled.button`
//     padding: .5em;
//     border: 0;

// `;
// const Form=styled.form`
//     display: auto;

// `;
const Image = styled.img`
    width: 500px;
    height: 500px:
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
    this.imageInput = React.createRef();
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
      image: [],
      allImages: [],
      imageURLS: [],
      errMessage: "",
      available: false,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileHandler = this.fileHandler.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  fileUpload = () => {
    const currImages = this.state.allImages;
    for (var i = 0; i < this.state.image.length; i++) {
      var fd = new FormData();
      fd.append(
        "image" + i.toString(),
        this.state.image[i],
        this.state.image[i].name
      );
      currImages.push(fd);
    }

    this.setState({ allImages: currImages });
  };
  fileHandler(e) {
    let allfiles = e.target.files;
    let files = [];
    let urls = [];

    for (var i = 0; i < allfiles.length; i++) {
      files[i] = allfiles.item(i);
    }
    files = files.filter(image => image.name.match(/\.(jpg|jpeg|png)$/));
    let message = "";
    if (files.length > 5) {
      message = "You are only allowed to upload 5 images ";
    }
    for (var j = 0; j < files.length; j++) {
      let reader = new FileReader();
      if (files[j].size > 5000000) {
        message = "File size exceeded 5 mb";
        break;
      }
      reader.readAsDataURL(files[j]);
      reader.onload = () => {
        urls.push(reader.result);
        this.setState({
          imageURLS: urls
        });
      };
    }

    this.setState({
      image: files,
      errMessage: message
    });
  }
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
          postal_code: this.postalCode,
          bathrooms: parseInt(this.state.numBathrooms),
          bedrooms: parseInt(this.state.numBedrooms),
          otherRooms: parseInt(this.state.numOtherRooms),
          type: this.state.type,
          available: this.state.available,
          picture_urls: {
            main: "",
            pic2: "",
            pic3: "",
            pic4: "",
            pic5: ""
          }
        };
        console.log(property1);
        axios
          .post(url, property1)
          .then(res => {
            console.log(res);
            console.log(res.data);
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
      <form className={classes.container}>
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
        <div className={classes.container1}>
          <label className={classes.textField}>Upload Images:</label>
          <input
            accept="image/*"
            className={classes.input}
            id="uploadImage"
            type="file"
            ref={this.imageInput}
            multiple
            onChange={this.fileHandler}
          />
          <label htmlFor="uploadImage">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              component="span"
              onClick={this.fileUpload}
            >
              Choose Images to Upload
            </Button>
          </label>
        </div>
        <br />
        <ul>
          {this.state.imageURLS.map(i => {
            return (
              <ImgRow key={i.toString()}>
                <Image src={i} alt="not available" />
              </ImgRow>
            );
          })}
        </ul>
        <br />
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
      </form>
    );
  }
}
CreateProperty.propType = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CreateProperty);
