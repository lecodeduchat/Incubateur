import React from 'react';

const Banner = (props) => {
    console.log(props);
    return (
        <div className='banner'>
            <ul>
                {/* Je map le tableau props pour afficher les 3 items dans des li */}
                {props.banner.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Banner;