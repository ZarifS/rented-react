import React, { Component } from "react";
import PropertiesList from "../containers/PropertiesList";
import BrowseProperties from "./BrowseProperties";

const properties = [
  {
    name: "Cozy Apartment in Orleans",
    imageUrl:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80",
    type: "Apartment",
    address: {
      streetNumber: "1674",
      street: "Grey Nuns Dr.",
      city: "Ottawa",
      province: "ON",
      country: "CANADA",
      postalCode: "K1C 1B5"
    },
    owner: {
      ownerID: 45,
      name: "Samantha Hawkins",
      profileURL:
        "https://images.unsplash.com/photo-1527153907022-465ee4752fdc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed05c707f6cb2dd027a718a8797d02f6&auto=format&fit=crop&w=500&q=60"
    },
    numBedrooms: 4,
    numBathrooms: 3,
    numOtherRooms: 0,
    rentMonthly: 1200,
    description:
      "My place is close to UQAM, Cégep Vieux-Montréal, Berri-Uqam metro station, Gare d'autocars de Montréal (main bus station), Théâtre St-Denis, Quartier des Spectacles, BAnQ Library, The Village, Patrick's Pub irlandais, Café Hookah Lounge, Hospital, .... You’ll love my place because of the neighbourhood, the proximity to absolutely everything, year round festivals, best restaurants, pubs and bars in the city! My place is good for couples, solo adventurers, and business travellers.",
    image: [],
    allImages: [],
    imageURLS: [],
    errMessage: "",
    available: true
  },
  {
    name: "Cozy Apartment in Orleans",
    imageUrl:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80",
    type: "Apartment",
    address: {
      streetNumber: "1674",
      street: "Grey Nuns Dr.",
      city: "Ottawa",
      province: "ON",
      country: "CANADA",
      postalCode: "K1C 1B5"
    },
    numBedrooms: 4,
    numBathrooms: 4,
    numOtherRooms: 0,
    rentMonthly: 1200,
    image: [],
    allImages: [],
    imageURLS: [],
    errMessage: "",
    available: true
  }
];

class Home extends Component {
  render = () => {
    let properties = [
      {
        name: "Hillton flats",
        address: "1674 GreyNuns Drive"
      },
      {
        name: "Malibu apartments",
        address: "16 Washington drive"
      }
    ];
    return (
      <div className="container">
        <BrowseProperties/>
      </div>
    );
  };
}

export default Home;
