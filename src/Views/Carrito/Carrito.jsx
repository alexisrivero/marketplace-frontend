import './Carrito.css';
import React, { useEffect, useState } from 'react';

const Carrito = () => {
    const URL = 'http://localhost:8080/checkout';
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(URL, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    console.log(data);
    
    const handleDelete = (productId) => {
        const updatedProducts = data.checkoutProducts.filter(product => product.id !== productId);
        setData(updatedProducts);
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
                        </tr>
                    </thead>
                    <tbody>
                        {data.checkoutProducts?.map(product => (
                            <tr key={product.id}>
                                <td className='product'>
                                    <img src={product.imageRoute} alt={product.name} style={{ width: '50px', height:'50px' }} />
                                {product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.quantity}</td>
                                <td>${(product.price*product.quantity).toFixed(2)}</td>
                                <td>
                                    <button className='delete' onClick={() => handleDelete(product.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='container-precio-total'>
                <div className='precio-total'>
                    <h3>Precio total</h3>
                    <div className='subtotal'>
                        <p>Subtotal:</p>
                        <p>${data.subTotal}</p>
                    </div>
                    <div className='subtotal'>
                        <p>Envio:</p>
                        <p>Gratis</p>
                    </div>
                    <div className='total'>
                        <p>Total:</p>
                        <p>${data.subTotal}</p>
                    </div>
                    <div className='button'>
                        <button className='comprar'>Comprar</button>  
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Carrito
