import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {

    let navigate = useNavigate();

    const marcel = (userId) => {
        console.log('click');
        // modifier l'historique de navigation, on remplace la page actuelle par la page edit avec replace: true
        // navigate(`../edit/${userId}`, { replace: true });
        navigate(`../edit/${userId}`);
    }

    return (
        <div className='User'>
            User liste
            {/* <button onClick={marcel}>User 1</button> */}
            {/* <button onClick={(e) => marcel(e)}>User 4</button> */}
            <button onClick={() => marcel(4)}>User 4</button>
        </div>
    );
};

export default User;