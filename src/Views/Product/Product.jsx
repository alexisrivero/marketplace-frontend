import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Product.css';

const Product = () => {
    const location = useLocation();
    const URL = `http://localhost:8080${location.pathname}`;
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

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

    const handleDeleteProduct = () => {
        fetch(`http://localhost:8080/product/${data.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(data => {
            console.log('Success:', data)
            navigate('/');
        })
        .catch(error => console.error('Error:', error)); 
    }

    const decodeJWT = () => {
        const token = localStorage.getItem('token');
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    };

    useEffect(() => {
        const decodedToken = decodeJWT();
        if (decodedToken?.rol === "ADMIN") {
            setIsAdmin(true);
        }
    }, []);

    const addProductToEditToLocalStorage = () => {
        localStorage.setItem('productToEdit', JSON.stringify(data));
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
                    {isAdmin && (
                        <div>
                            <a href="/edit-product"><button className='edit-button' onClick={addProductToEditToLocalStorage}>Editar Producto</button></a>
                            <button className='delete-button' onClick={handleDeleteProduct}>Borrar Producto</button>
                        </div>
                    )}

                    {showAlert && <div className="alert">Producto agregado al carrito correctamente!</div>}
                </div>
            </div>
        </div>
    );
};

export default Product;