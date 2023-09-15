import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';

const Home = () => {
    return (
        <div>
            <Mouse />
            <Navigation />
            <SocialNetwork />
        </div>      
    );
};

export default Home;