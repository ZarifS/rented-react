import styled from 'styled-components';
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Label=styled.label`
    padding: .5em 1em .5em 0;
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
const Input=styled.input`
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
const Row=styled.li`
    display: flex;
    justify-content: flex-end;
    padding: .5em;

`;
const ImgRow=styled.li`
    display: inline;
    padding: .5em;`
// const Button=styled.button`
//     padding: .5em;
//     border: 0;

// `;
// const Form=styled.form`
//     display: auto;
    
// `;
const Image =styled.img`
    width: 500px;
    height: 500px:
`;
const styles=theme=>({
    container:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column',
    },
    container1:{
        display:'flex',
        flexWrap:'wrap',
    },
    textField:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    checkBox:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense:{
        marginTop:16,
    },
    menu:{
        width:300,
    },
    button: {
        margin: theme.spacing.unit,
      },
    input: {
        display: 'none',
      },
    
});
const types=[
    {
        value: "House",
        label: "House",
    },
    {
        value: "Apartment",
        label: "Apartment",
    }
]
class UpdateProperty extends Component{
    constructor(props){
        super(props);
        this.imageInput=React.createRef();
        this.property = {
            title: "Cozy Apartment in Orleans",
            imageUrl:
              "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80",
            type: 'Apartment',
            address: {
              streetNumber: "1674",
              street: "Grey Nuns Dr.",
              city: "Ottawa",
              province: "ON",
              country: "CANADA",
              postalCode: "K1C 1B5"
            },
            bedrooms: 4,
            bathrooms: 3,
            other: 0,
            rent: 1200,
            description:
              "My place is close to UQAM, Cégep Vieux-Montréal, Berri-Uqam metro station, Gare d'autocars de Montréal (main bus station), Théâtre St-Denis, Quartier des Spectacles, BAnQ Library, The Village, Patrick's Pub irlandais, Café Hookah Lounge, Hospital, .... You’ll love my place because of the neighbourhood, the proximity to absolutely everything, year round festivals, best restaurants, pubs and bars in the city! My place is good for couples, solo adventurers, and business travellers.",
            image: [],
            allImages: [],
            imageURLS: [],
            errMessage: "",
            available: true
          };
        this.state={
            title: this.property.title,
            numBedrooms: this.property.bedrooms,
            numBathrooms:this.property.bathrooms,
            numOtherRooms:this.property.other,
            rent:this.property.rent,
            image: [],
            allImages:[],
            imageURLS:[this.property.imageUrl],//property.main,property.pic2,property.pic3,property.pic4,property.pic5
            errMessage:"",
            available:this.property.available
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.fileHandler=this.fileHandler.bind(this);
        this.fileUpload=this.fileUpload.bind(this);
        this.handleCheck=this.handleCheck.bind(this);
    }
   
    fileUpload=()=>{
        const currImages=this.state.allImages;
        for (var i=0;i<this.state.image.length;i++){
            var fd = new FormData();
            fd.append('image'+i.toString(),this.state.image[i],this.state.image[i].name);    
            currImages.push(fd);
        }
        
        this.setState({allImages:currImages});
    }
    fileHandler(e){
        let allfiles=e.target.files;
        let files=[];
        let urls=[];
        
        for (var i=0;i<allfiles.length;i++){
            files[i]=(allfiles.item(i));
        }
        files=files.filter(image=>image.name.match(/\.(jpg|jpeg|png)$/));
        let message = "";
        if (files.length>5){
            message=("You are only allowed to upload 5 images ");
        }
        for (var j=0;j<files.length;j++){
            let reader=new FileReader();
            if (files[j].size>5000000){
                message=("File size exceeded 5 mb");
                break;
            }
            reader.readAsDataURL(files[j]);
            reader.onload=()=>{
                urls.push(reader.result);
                this.setState({
                    imageURLS: urls
                });
            }
        }
       
        this.setState({
            image : files,
            errMessage: message
        });
    }
    handleCheck(){
        this.setState({
            available:!this.state.available
        });
    }
    handleInputChange(e){
        const target=e.target;
        const name=target.name;
        const value=target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(e){
        var valid=this.validateInput();
        if(valid){

        }

        e.preventDefault();
    }
    handleCancel(e){
        return;
    }
    validateInput = () => {
        if(this.state.rent<0||this.state.numBathrooms<0||this.state.numBedrooms<0||this.state.numOtherRooms<0||this.state.rent<0){
            return false;
        }
        return true;
    }
    render(){
        const { classes }=this.props;
        return(
            <form className={classes.container}>
                <TextField name="title" label="Title" className={classes.textField} PlaceHolder="Title"  value={this.state.title} onChange={this.handleInputChange} margin="normal" variant="outlined"/>
                <TextField disabled name="type" select label="Property Type" className={classes.textField} value={this.property.type} SelectProps={{MenuProps:{className:classes.menu,}}}
                            helperText="Please select Property Type" margin="normal" variant="outlined">
                        {types.map(option=>(
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))
                        }
                </TextField>
                <TextField disabled name="street" label="Street"  className={classes.textField} PlaceHolder="Street" value={this.property.address.street} onChange={this.handleInputChange} margin="normal" variant="outlined"/>
                <div className={classes.container1}>
                    <TextField disabled name="streetNumber" label="Street Number"  className={classes.textField} PlaceHolder="Street Number" value={this.property.address.streetNumber} onChange={this.handleInputChange} margin="normal" variant="outlined"/>
                    <TextField disabled name="city" label="City"  className={classes.textField} PlaceHolder="City" value={this.property.address.city} onChange={this.handleInputChange} margin="normal" variant="outlined"/>
                    <TextField disabled name="province" label="Province"  className={classes.textField} PlaceHolder="Province" value={this.property.address.province} onChange={this.handleInputChange} margin="normal" variant="outlined"/>
                    <TextField disabled name="country" label="Country"  className={classes.textField} PlaceHolder="Country" value={this.property.address.country} onChange={this.handleInputChange} margin="normal" variant="outlined"/>
                    <TextField disabled name="postalCode" label="Postal Code"  className={classes.textField} PlaceHolder="Postal Code" value={this.property.address.postalCode} onChange={this.handleInputChange} margin="normal" variant="outlined"/>
                    </div>
                <div className={classes.container1}>
                <TextField name="numBedrooms" label="Bedrooms" InputLabelProps={{shrink: true,}} className={classes.textField}  type="number" value={this.state.numBedrooms} onChange={this.handleInputChange} margin="normal" variant="outlined"/>
                <TextField name="numBathrooms"  label="Bathrooms" InputLabelProps={{shrink: true,}} type="number" className={classes.textField}  value={this.state.numBathrooms} onChange={this.handleInputChange} margin="normal" variant="outlined"/>                
                <TextField name="numOtherRooms" label="Other Rooms" InputLabelProps={{shrink: true,}} type="number" className={classes.textField}  value={this.state.numOtherRooms} onChange={this.handleInputChange} margin="normal" variant="outlined"/>                
                <TextField name="rent" label="Rent" type="number" InputLabelProps={{shrink: true,}} className={classes.textField}  value={this.state.rent} onChange={this.handleInputChange} margin="normal" variant="outlined"/>
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
                    <label className={classes.textField}>
                        Upload Images:
                    </label>
                    <input accept="image/*" className={classes.input} id="uploadImage" type="file" ref={this.imageInput} multiple onChange={this.fileHandler} />
                    <label htmlFor="uploadImage"> 
                    <Button className={classes.button} variant="contained" color="primary" component="span" onClick={this.fileUpload}  >Choose Images to Upload</Button>
                    </label>
                </div>
                <br/>
                <ul>
                    {
                        this.state.imageURLS.map( 
                            i=>{ 
                                 return <ImgRow key={i}> 
                                     <Image src={i} alt="not available"/> 
                                </ImgRow>
                            }
                        )
                    }
                </ul> 
                <br/>
                <Row>
                <Button className={classes.button} variant="contained" color="primary" onClick={this.handleSubmit}  >Add Property</Button>
                </Row>
            </form>
        );
    }
}
UpdateProperty.propType={
    classes:PropTypes.object.isRequired,
};
export default withStyles(styles)(UpdateProperty);