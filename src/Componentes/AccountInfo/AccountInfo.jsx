import React, {useState, useEffect} from 'react';
import './AccountInfo.css';


const AccountInfo = ( userData) => {
    console.log(userData);
    if (!userData || !userData.userData.paymentMethods) {
        return <p>No hay métodos de pago disponibles.</p>;
    }

    return (
            <div className="account-info-container">
                <div className="account-info-section">
                    <h2>Información de la Cuenta</h2>
                    <p>Nombre: {userData.userData.name}</p>
                    <p>Apellido: {userData.userData.lastName}</p>
                    <p>Correo Electrónico: {userData.userData.email}</p>
                    <p>Teléfono: {userData.userData.phoneNumber}</p>
                </div>
            
            <div className="account-info-container">
                <div className="account-info-section">
                    {userData.userData.addresses && userData.userData.addresses.map((address, index) => (
                        <div key={index} className="address">
                            <h3>Dirección {address.houseNumber}</h3>
                            <p>Calle: {address.street}</p>
                            <p>Ciudad: {address.city}</p>
                            <p>Estado: {address.state}</p>
                        </div>
                    ))}
                </div>

                <div className="account-info-section">
                    {userData.userData.paymentMethods.map((paymentMethod, index) => (
                        <div key={index} className="payment-method">
                            <h3>Numero de tarjeta: {paymentMethod.cardNumber}</h3>
                            <p>Tipo de tarjeta: {paymentMethod.cardType}</p>
                            <p>Fecha de expiración: {new Date(paymentMethod.expirationDate).toLocaleDateString()}</p>
                            <p>Nombre de titular: {paymentMethod.ownerName}</p>
                        </div>
                    ))}
                </div>


            
            </div>
        </div>
    );
};

export default AccountInfo;