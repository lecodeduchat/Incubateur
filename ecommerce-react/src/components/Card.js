import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({article}) => {
    const url = 'https://127.0.0.1:8000/images/';

    return (
        <div className='card'>
            <div className="img-container">
                <NavLink to={"/produit/"+article.slug}>
                    <img src={url+article.images} alt={article.name} />
                </NavLink>
            </div>
            <div className="article-name">{article.name}</div>
            <div className="article-price">€{article.price}</div>
        </div>
    );
};

export default Card;