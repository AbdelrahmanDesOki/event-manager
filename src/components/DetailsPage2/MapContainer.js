import React from "react";
import{BrowserRouter as Router} from 'react-router-dom'
import { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
 
class MapContainer extends Component {

  onMarkerClick = (props, marker, e) => {
    //stores the coordinates
    const lat = e.latLng.lat().toString();
    const lng = e.latLng.lat().toString();
    const coordinates = lat + ", " + lng;
    console.log(coordinates);
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      coordinate: coordinates
    });
  };
mapClicked(mapProps, map, clickEvent) {
  const lat = clickEvent.latLng.lat();
  const lng = clickEvent.latLng.lng();

  this.setState(previousState => {
    return {
      markers: [
        ...previousState.markers,
        {
          title: "",
          name: "",
          position: { lat, lng }
        }
      ]
    };
  });
}


constructor(props) {
  super(props);
  this.state = {
    markers: [
      {
        title: "20.000 HUF",
        name: "PRICE",
        position: { lat: 47.5047, lng: 19.0960 }
      }
    ]
  };
  this.mapClicked = this.mapClicked.bind(this);
}

    render(){
      return (
        <><>
        <React.Fragment>
        <Marker/>
        </React.Fragment>
          <Router>
  
          </Router>
        </><Map
          google={this.props.google}
          zoom={18}
          style={{
            width: '650px',
            height: '400px' }}
          initialCenter={{ lat: 47.5047, lng: 19.0960 }}
        >{this.state.markers.map((marker, index) => (
          //marker
          <Marker
            key={index}
            title={marker.title}
            name={marker.name}
            position={marker.position}
            onClick={this.onMarkerClick}
          ></Marker>
        ))}

        
        {/*infoWindow*/}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            {/*Placeholder for content*/}
             <img src="https://logos-world.net/wp-content/uploads/2021/08/Booking-Logo-700x394.png" width="100px" height="100px"></img>
          </div>
          <li class="item"><a href="https://www.booking.com/" target="_blank">
            <span class="icon icon-booking"></span> Booking.com
            </a>
            </li>
        </InfoWindow>

        </Map></>
      )
      
    }
  }

  
  
  export default GoogleApiWrapper({
    apiKey: "AIzaSyCTo1PSKe_KPHojYRIKSR4CnZf3SuwtclU"
  })(MapContainer);
  