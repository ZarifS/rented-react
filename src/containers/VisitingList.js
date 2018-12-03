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
    if (this.props.user) {
      const userID = this.props.user.uid;
      if (userID) {
        axios
          .get("http://localhost:8000/api/getVisitingList/" + userID)
          .then(res => {
            let { data } = res;
            if (data) {
              this.setState({ visitings: data }, () => {
                console.log("Set visiting results to : ", this.state.visitings);

                this.state.visitings.forEach(visit => {
                  axios
                    .get(
                      "http://localhost:8000/api/getListing/" + visit.listing_id
                    )
                    .then(response => {
                      const { data } = response;
                      console.log(data);
                      let temp = [...this.state.properties];
                      temp.push(data);
                      this.setState({ properties: [...temp] });
                    });
                });
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
