import React from 'react'
import './App.css';
import EventDetails from './components/EventDetails/EventDetails'
import{BrowserRouter as Router} from 'react-router-dom'
import { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';



class MapContainer extends Component {
  render(){
    return (
      <><>
        <EventDetails />

        <Router>

        </Router>
      </><Map
        google={this.props.google}
        zoom={5}
        style={{ position: "absolute",
        top: "400px",
        left: "800px",
        right: "100px",
        bottom: "50px" }}
        initialCenter={{ lat: 47.162495, lng: 19.503304 }}
      >
          <Marker position={{ lat: 47.00, lng: -122.00 }} />
        </Map></>
    )
    
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCTo1PSKe_KPHojYRIKSR4CnZf3SuwtclU"
})(MapContainer);


