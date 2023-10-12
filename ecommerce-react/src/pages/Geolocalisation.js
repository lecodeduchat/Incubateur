import React, {useEffect, useState} from 'react';
import axios from "axios";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import Header from '../components/Header';

const Geolocalisation = () => {

    const [address, setAddress] = useState('');
    const [result, setResult] = useState([50.608941, 3.206576]);
    const [markers, setMarkers] = useState([]);
   
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("test",address);
        axios.get('https://api-adresse.data.gouv.fr/search/?q=' + address)
            .then((res) => setResult([res.data.features[0].geometry.coordinates[1], res.data.features[0].geometry.coordinates[0]]))
            .catch((err) => console.log(err));
        setAddress('');
    };

    const onChange = (e) => {
        setAddress(e.target.value);
    };

    useEffect(() => {
        setMarkers([
            {
              geocode: [result[0], result[1]],
              name: "Chéreng",
              popUp: "Chéreng, France",
            }
        ]);
          
    }, [result]);

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
        <>
        <Header />
        <h1>Geolocalisation</h1>
        <form  onSubmit={onSubmit}>
            <label htmlFor="address">Entrer une adresse postale</label>
            <input type="text" name="address" id="address" onChange={onChange}/>
            <button type="submit">Géolocaliser</button>
        </form>
        <div className="result-container">
            <h2>Résultat</h2>
            <div className="address">{address}</div>
            <div className="result">
                <span>Latitude: {result[0]}</span>&nbsp;
                <span>Longitude: {result[1]}</span>
            </div>
        </div>
        <MapContainer center={result} zoom={13}>
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
        </>

    );
};

export default Geolocalisation;