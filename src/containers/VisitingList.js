import React, { Component } from "react";
import PropertiesList from "../containers/PropertiesList";
import axios from "axios";

class VisitingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitings: [],
      properties: []
    };
  }
  componentDidMount = () => {
    console.log(this.props.user);
    const userID=this.props.user.uid;
    if(userID){
      axios.get("http://localhost:8000/api/getVisitingList/"+userID).then(res => {
        let { data } = res;
        if (data) {
          this.setState({ visitings: data }, () => {
            console.log("Set visiting results to : ", this.state.visitings);
          });
        }
      });
      console.log(this.state.properties);
      let temp=this.state.properties;
      for (var i=0;i<this.state.visitings.length;i++){
          axios.get("http://localhost:8000/api/getListing/"+this.state.visitings[i].listing_id).then(res => {
          let { data } = res;
          if (data) {
            temp.push(data);
            this.setState({ properties: temp }, () => {
              console.log("Set property results to : ", this.state.properties);
            });
          }
        });
      }
    }
  };

  render = () => {
    return (
      <div className="container">
        <PropertiesList properties={this.state.properties} />
      </div>
    );
  };
}

export default VisitingList;
