import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/produits' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Nos produits</li>
                </NavLink>
                <NavLink to='/contact' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Contactez-nous</li>
                </NavLink>
                <NavLink to='/geolocalisation' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Test Leaflet</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;