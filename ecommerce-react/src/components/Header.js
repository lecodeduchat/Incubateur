import React from 'react';
import Logo from './Logo';
import SocialNetwork from './SocialNetwork';
import Navigation from './Navigation';
import Search from './Search';
import NavSecondary from './NavSecondary';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="header-top-content">
                    <span>Frais de port offerts à domicile en France métropolitaine à partir de 100€ d'achats.</span>
                </div>
                <SocialNetwork />
            </div>
            <div className="header-logo">
                <Logo />
                <div className="header-side-container">
                    <Search />
                    <NavSecondary />
                </div>
            </div>
           
            <Navigation />
        </header>
    );
};

export default Header;