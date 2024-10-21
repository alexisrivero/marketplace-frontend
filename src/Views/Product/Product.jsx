import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './product.css';

const Product = () => {
    const location = useLocation();
    const URL = `http://localhost:8080${location.pathname}`;
    const navigate = useNavigate();

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

    const addProductURL = 'http://localhost:8080/checkout/product';
    const product = {
        id: data.id,
        quantity: quantity,
    };

    const [showAlert, setShowAlert] = useState(false);


    const handleAddToCart = () => {
        fetch(addProductURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(product),
        })
        .then(data => {
            console.log('Success:', data)
            if (localStorage.getItem('token')) {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
            }
            else {
                navigate('/sign-in');
                
            }
        })
        .catch(error => console.error('Error:', error));

    }

    return (
        <div className="product">
            <img src={data.imageRoute} alt={data.name} className="product-image" />
            <div className='product-data'>
                <div className="product-details">
                    <h2 className="product-name">{data.name}</h2>
                    <p className="product-price">${data.price}</p>
                    <p className='product-category'>{data.category}</p>
                    <p className='product-brand'>{data.brand}</p>
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
                    <button className='add-to-cart' onClick={handleAddToCart}>Agregar al carrito</button>
                    {showAlert && <div className="alert">Producto agregado al carrito correctamente!</div>}
                </div>
            </div>
        </div>
    );
};

export default Product;