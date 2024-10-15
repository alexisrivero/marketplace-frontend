import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './product.css';

const Product = () => {
    const location = useLocation();
    const URL = `http://localhost:8080${location.pathname}`;

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="product">
            <img src={data.imageRoute} alt={data.name} className="product-image" />
            <div className='product-data'>
                <div className="product-details">
                    <h2 className="product-name">{data.name}</h2>
                    <p className="product-price">${data.price}</p>
                    <p className='product-brand'>{data.brand}</p>
                    <p className='product-category'>{data.category}</p>
                    <p className='product-description'>{data.description}</p>
                </div>
                <div className='quantity-container'>
            
                    <div className='quantity-controls'>
                        <button onClick={handleDecrement}>-</button>
                        <input
                            type='number'
                            id='quantity'
                            name='quantity'
                            value={quantity}
                            readOnly
                        />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button className='add-to-cart'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Product;