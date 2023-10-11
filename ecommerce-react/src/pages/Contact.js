import React from "react";
import Header from "../components/Header";
// import L from "@/assets/leaflet/leaflet";

const Contact = () => {
  // let map = L.map("map").setView([51.505, -0.09], 13);
  // let Stadia_OSMBright = L.tileLayer(
  //   "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
  //   {
  //     maxZoom: 20,
  //     attribution:
  //       'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  //       'Tiles &copy; <a href="https://stadiamaps.com">Stadia Maps</a>, ' +
  //       'Imagery © <a href="https://openmaptiles.org/">OpenMapTiles</a>',
  //   }
  // );
  // Stadia_OSMBright.addTo(map);
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
      <div id="map"></div>
    </div>
  );
};

export default Contact;
