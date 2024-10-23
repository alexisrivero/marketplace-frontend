import React, { useState, useEffect } from 'react';
import './User.css';
import UserSideBar from '../../Componentes/UserSideBar/UserSideBar';
import AccountInfo from '../../Componentes/AccountInfo/AccountInfo';
import OrderInfo from '../../Componentes/OrderInfo/OrderInfo';

const User = () => {
    const [view, setView] = useState('account');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const URL = 'http://localhost:8080/user/';
        fetch(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => console.log(response) || response.json())
        .then(data => setUserData(data))
        .catch(error => setError(error.message));
    }
    , []);



    const renderView = () => {
        switch (view) {
            case 'account':
                return <AccountInfo userData={userData} />;
            case 'orders':
                return <OrderInfo />;
            default:
                return <AccountInfo userData={userData} />;
        }
    };

    
    return (
        <div className="user-container">
            <UserSideBar onSelectView={setView} />
            <div className="user-content">
                {error && <p className="error">{error}</p>}
                {userData ? renderView() : <p>Loading...</p>}
            </div>
        </div>
    );
};

export default User;