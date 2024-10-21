import React, { useState, useEffect } from 'react';
import './Carrito.css';
import { FaTrashAlt, FaPlus , FaMinus } from "react-icons/fa";

const Carrito = () => {
    const [data, setData] = useState({ checkoutProducts: [], subTotal: 0, total: 0, discount: 0 });

    const fetchData = () => {
        fetch('http://localhost:8080/checkout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (productId) => {
        fetch(`http://localhost:8080/checkout/product/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => {
            if (response.ok) {
                fetchData(); 
            } else {
                console.error('Error deleting product');
            }
        })
        .catch(error => console.error('Error deleting product:', error));
    };

    const handleQuantityChange = (productId, change) => {
        fetch(`http://localhost:8080/checkout/product/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ quantity: change }),
        })
        .then(response => {
            if (response.ok) {
                fetchData(); // Fetch updated data after quantity change
            } else {
                console.error('Error updating quantity');
            }
        })
        .catch(error => console.error('Error updating quantity:', error));
    };
    
    const calculateDiscountPercentage = () => {
        if (data.subTotal === 0) return 0;
        return ((data.subTotal - data.total) / data.subTotal) * 100;
    };

    return (
        <div className='carrito'>
            <div className='lista-carrito'>
                <h1>Carrito</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.checkoutProducts.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <a href={`/product/${product.id}`} className='product'>
                                        <img src={product.imageRoute} alt={product.name} style={{ width: '50px', height: '50px' }} />
                                        {product.name}
                                    </a>
                                </td>
                                <td>${product.price}</td>
                                <td>
                                    <button onClick={() => handleQuantityChange(product.id, -1)} disabled={product.quantity <= 1}>
                                        <FaMinus />
                                    </button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => handleQuantityChange(product.id, 1)}>
                                        <FaPlus />
                                    </button>
                                </td>
                                <td>${(product.price * product.quantity).toFixed(2)}</td>
                                <td>
                                    <button className='delete' onClick={() => handleDelete(product.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='container-precio-total'>
                <div className='precio-total'>
                    <h3>Resumen de compra</h3>
                    <div className='subtotal'>
                        <p>Subtotal:</p>
                        <p>${data.subTotal.toFixed(2)}</p>
                    </div> 
                    {calculateDiscountPercentage() > 0 && (
                        <div className='subtotal'>
                            <p>Descuento:</p>
                            <p>{calculateDiscountPercentage().toFixed(2)}%</p>
                        </div>
                    )}
                    <div className='subtotal'>
                        <p>Envio:</p>
                        <p>Gratis</p>
                    </div>
                    <div className='total'>
                        <p>Total:</p>
                        <p>${data.total.toFixed(2)}</p>
                    </div>
                    <div className='button'>
                        <button className='comprar'>
                            <a href="/carrito/billing-info">
                            Proceder a comprar
                            </a>
                        </button>  
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Carrito;