import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapContainer.css";

class MapContainer extends React.Component {
  render() {
    const position = [-37.56138, 143.8752];
    return (
      <Map
        className="markercluster-map"
        center={position}
        zoom={15}
        minZoom={9}
        maxZoom={17}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
        </Marker>
        <Marker position={position} />>
      </Map>
    );
  }
}

export default MapContainer;
