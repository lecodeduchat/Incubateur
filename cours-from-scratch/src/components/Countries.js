import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const Countries = () => {
    // useState est un hook qui permet de créer un état local dans un composant fonctionnel
    const [data, setData] = useState([]);
    const [hello, setHello] = useState('Hello les amis');
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    // Le useEffect se joue lorsque le composant est monté
    // [] fonction callback
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className='countries'>
            <h2>{hello}</h2>
            <ul className="radio-container">
                <input
                    type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                {radios.map((continent, index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            id={continent}
                            name="continentRadio"
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)}
                        />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}

            </ul>
            {/* Si selectedRadio est true, alors on affiche le bouton */}
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>
            )}
            <ul>
                {data
                    .filter((country) => country.region.includes(selectedRadio))
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country, index) => (
                        <Cards country={country} key={index} />
                    ))}
            </ul>
        </div>
    );
};

export default Countries;