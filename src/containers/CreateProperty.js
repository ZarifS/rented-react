import styled from 'styled-components';
import React, { Component } from "react";


const Label=styled.label`
    padding: .5em 1em .5em 0;
    flex: 1;
`;
const Select=styled.select`
    flex: 2;
`;
const Input=styled.input`
    flex: 2;
`;
const Wrap=styled.ul`
    background-color:whitesmoke;
    list-style-type: none;
    padding: 0;
    border-radius: 2px;
`;
const Row=styled.li`
    display: flex;
    justify-content: flex-end;
    padding: .5em;

`;
const ImgRow=styled.li`
    display: inline;
    padding: .5em;`
const Button=styled.button`
    padding: .5em;
    border: 0;

`;
const Form=styled.form`
    display: auto;
    
`;
const Image =styled.img`
    width: 500px;
    height: 500px:
`;
class CreateProperty extends Component{
    constructor(props){
        super(props);
        this.imageInput=React.createRef();
        this.state={
            value: "Apartment",
            title: "",
            street: "",
            streetNumber: "",
            city: "",
            province:"",
            country:"",
            postalCode:"",
            numBedrooms: 0,
            numBathrooms:0,
            numOtherRooms:0,
            rent:0,
            image: [],
            allImages:[],
            imageURLS:[],
            errMessage:"",
            available: true
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.fileHandler=this.fileHandler.bind(this);
        this.fileUpload=this.fileUpload.bind(this);
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
        console.log('hi');
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
    handleChange(e){
        this.setState({value: e.target.value});
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
    validateInput = () => {
        if(this.state.street_number==="" ||this.state.street==="" || this.state.city===""|| this.state.province===""
        || this.state.country===""|| this.state.postalCode===""||this.state.rent<0||this.state.numBathrooms<0||this.state.numBedrooms<0||this.state.numOtherRooms<0||this.state.rent<0){
            return false;
        }
        return true;
    }
    render(){
        return(
            <Form>
                <Wrap>
                <Row>
                    <Label>
                        Title:
                    </Label>
                    <Input name="title" type="text" defaultValue={this.state.title} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Property Type: 
                    </Label>
                    <Select name="propertyType" title={"Select Property Type"} value={this.state.value} onChange={this.handleChange}>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                    </Select>
                </Row>
                <Row>
                    <Label>
                        Street Name:
                    </Label>
                    <Input name="street" type="text" defaultValue={this.state.street} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Street Number:
                    </Label>
                    <Input name="streetNumber" type="text" defaultValue={this.state.streetNumber} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        City:
                    </Label>
                    <Input name="city" type="text" defaultValue={this.state.city} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Province:
                    </Label>
                    <Input name="province" type="text" defaultValue={this.state.province} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Country:
                    </Label>
                    <Input name="country" type="text" defaultValue={this.state.country} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Postal Code:
                    </Label>
                    <Input name="postalCode" type="text" defaultValue={this.state.postalCode} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Number of Bedrooms:
                    </Label>
                    <Input name="numBedrooms" type="number" defaultValue={this.state.numBedrooms} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Number of Bathrooms:
                    </Label>
                    <Input name="numBathrooms" type="number" defaultValue={this.state.numBathrooms} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Number of Other Rooms:
                    </Label>
                    <Input name="numOtherRooms" type="number" defaultValue={this.state.numOtherRooms} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Rent:
                    </Label>
                    <Input name="rent" type="number" defaultValue={this.state.numOtherRooms} onChange={this.handleInputChange}/>
                </Row>
                <Row>
                    <Label>
                        Upload Images:
                    </Label>
                    <Input type="file" ref={this.imageInput} multiple onChange={this.fileHandler} />
                    {/* <Button onClick={this.fileUpload}  >Upload Image</Button> */}
                </Row>
                <br/>
                <ul>
                    {
                        this.state.imageURLS.map(
                            i=>{
                                return <ImgRow key={i.toString()}>
                                    <Image src={i} alt="not available"/>
                                </ImgRow>
                            }
                        )
                    }
                </ul>
                <br/>
                <Row>
                    <Button onClick={this.handleSubmit}  >Add Property</Button>
                </Row>
                </Wrap>
            </Form>
        );
    }
}
export default CreateProperty;