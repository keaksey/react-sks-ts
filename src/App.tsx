import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props: any) =>{
  return (
      <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  )
}))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <MyMapComponent
            isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    );
  }
}

export default App;
