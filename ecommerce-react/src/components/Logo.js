import React from 'react';

const Logo = () => {
    return (
        <div>
            <div className="logo">
            {/* Les images importées depuis la balise img sont accessibles dans public */}
            <img src="./img/logo.webp" alt="logo la boutique de Margaux" />
            
        </div>
        </div>
    );
};

export default Logo;