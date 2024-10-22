import React, { useState, useEffect } from 'react';
import './OrderInfo.css';

const OrderInfo = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const URL = 'http://localhost:8080/order/user';
        fetch(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => response.json())
        .then(data => setOrders(data))
        .catch(error => setError(error.message));
    }
    , []);



    return (
        <div className="order-info-container">
            <h2>Información de Compras</h2>
            {error && <p className="error">{error}</p>}
            {orders.length === 0 ? (
                <p>No hay órdenes disponibles.</p>
            ) : (
                orders.map((order, index) => (
                    <div key={index} className="order">
                        <h3>Orden #{order.id}</h3>
                        <p>Nombre: {order.name}</p>
                        <p>Apellido: {order.lastName}</p>
                        <div className="order-address">
                            <h4>Dirección de Envío</h4>
                            <p>{order.address.houseNumber} {order.address.street}, {order.address.city}, {order.address.state}</p>
                        </div>
                        <div className="order-payment">
                            <h4>Método de Pago</h4>
                            <p>Numero de tarjeta: {order.paymentMethod.cardNumber}</p>
                            <p>Tipo de tarjeta: {order.paymentMethod.cardType}</p>
                            <p>Fecha de expiración: {new Date(order.paymentMethod.expirationDate).toLocaleDateString()}</p>
                            <p>Nombre de titular: {order.paymentMethod.ownerName}</p>
                        </div>
                        <div className="order-products">
                            <h4>Productos</h4>
                            {order.orderProductList.map((product, index) => (
                                <div key={index} className="product">
                                    <p>Nombre: {product.name}</p>
                                    <p>Precio: ${product.price.toFixed(2)}</p>
                                    <p>Cantidad: {product.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <p>Total: ${order.total.toFixed(2)}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrderInfo;