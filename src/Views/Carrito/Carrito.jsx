import './Carrito.css';
import React, { useEffect, useState } from 'react';

const Carrito = () => {
    const URL = 'http://localhost:8080/cart';
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <h1>Carrito</h1>
            <div className="cart-container">
                {data.map(product => (
                    <div key={product.id} className="cart-product">
                        <img src={product.imageRoute} alt={product.name} className="cart-product-image" />
                        <div className="cart-product-data">
                            <h2 className="cart-product-name">{product.name}</h2>
                            <p className="cart-product-price">${product.price}</p>
                            <p className="cart-product-quantity">Cantidad: {product.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carrito
