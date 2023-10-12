import React from "react";
import Header from "../components/Header";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const Contact = () => {
  // const markers = [
  //   {
  //     geocode: [48.8566, 2.3522],
  //     name: "Paris 1",
  //     popUp: "Paris, France",
  //   },
  //   {
  //     geocode: [48.86, 2.36],
  //     name: "Paris 2",
  //     popUp: "Hello, je suis une popup 2!",
  //   },
  //   {
  //     geocode: [48.85, 2.35],
  //     name: "Paris 3",
  //     popUp: "Hello, je suis une popup 3!",
  //   }
  // ];

  const markers = [
    {
      geocode: [50.608941, 3.206576],
      name: "Chéreng",
      popUp: "Chéreng, France",
    }
  ];

  const customIcon = new Icon({
    iconUrl: require("@/assets/img/marker-icon.png"),
    iconSize: [38, 38],
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: 'marker-cluster-custom',
      iconSize: point(40, 40, true)
    })
  };
  
  return (
    <div>
      <Header />
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact-items">
          <div className="contact-item">
            <p>O3 88 88 88 88</p>
          </div>
          <div className="contact-item">
            <p>example@demo.fr</p>
          </div>
          <div className="contact-item">
            <p>1 rue de la paix 75000 Paris</p>
          </div>
        </div>
      </div>
      <MapContainer center={[50.608941, 3.206576]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker, index) => (
            <Marker position={marker.geocode} icon={customIcon} key={index}>
              <span>{marker.name}</span>
              <Popup><h2>{marker.popUp}</h2></Popup>
            </Marker>
          ))}
        </MarkerClusterGroup> 
      </MapContainer>
    </div>
  );
};

export default Contact;
