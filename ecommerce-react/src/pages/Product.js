import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import axios from 'axios';

const Product = () => {
    const slug = window.location.pathname.split('/')[2];
    console.log(slug);
    // Envoyer requête à l'API pour récupérer le produit correspondant au slug
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://127.0.0.1:8000/api/articles'+slug)
        .then((res) => res.data['hydra:member'])
            .then((res) => setData(res));
        
    }, []);


    // Afficher les infos du produit
    return (
        <div>
            <Header />
            <h2>{data.name}</h2>
        </div>
    );
};

export default Product;