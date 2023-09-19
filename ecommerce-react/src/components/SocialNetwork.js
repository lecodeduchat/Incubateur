import React from 'react';

const SocialNetwork = () => {
    return (
        <div className='social-network'>
            <ul className="content">
                <a href="http://instagram.com" target='_blank'>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
                <a href="http://youtube.com" target='_blank'>
                    <li><i className="fab fa-youtube"></i></li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;