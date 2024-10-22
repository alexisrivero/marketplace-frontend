import React, { useState, useEffect } from 'react';
import './Carrito.css';
import { FaTrashAlt, FaPlus , FaMinus } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";


const Carrito = () => {
    const [data, setData] = useState({ checkoutProducts: [], subTotal: 0, total: 0});

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


    const [addresses, setAddresses] = useState([]);
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        houseNumber: '',
        street: '',
        city: '',
        state: '',
    });
    const [newPaymentMethod, setNewPaymentMethod] = useState({
        cardType: '',
        cardNumber: '',
        expirationDate: '',
        ownerName: '',
        funds: ''
    });
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const fetchAddresses = () => {
        fetch('http://localhost:8080/user/address', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                setAddresses(data);
            } else {
                setAddresses([]);
            }
        })
        .catch(error => console.error('Error fetching addresses:', error));
    };

    const fetchPaymentMethods = () => {
        fetch('http://localhost:8080/user/payment-method', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                setPaymentMethods(data);
            } else {
                setPaymentMethods([]);
            }
        })
        .catch(error => console.error('Error fetching payment methods:', error));
    };

    useEffect(() => {
        fetchAddresses();
        fetchPaymentMethods();
        fetchData();
    }, []);

    const handleAddAddress = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/user/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(newAddress),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return console.log(response);
            ;
        })
        .then(() => {
            fetchAddresses();
            setShowAddressForm(false);
            setNewAddress({
                houseNumber: '',
                street: '',
                city: '',
                state: '',
            });
        })
        .catch(error => console.error('Error adding address:', error));
    };

    const handleAddPaymentMethod = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/user/payment-method', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(newPaymentMethod),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return console.log(response);
            ;
        })
        .then(() => {
            fetchPaymentMethods();
            setShowPaymentForm(false);
            setNewPaymentMethod({
                cardType: '',
                cardNumber: '',
                expirationDate: '',
                ownerName: '',
                funds: ''
            });
        })
        .catch(error => console.error('Error adding payment method:', error));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setNewAddress(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePaymentMethodChange = (e) => {
        const { name, value } = e.target;
        setNewPaymentMethod(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectAddress = (index) => {
        setSelectedAddress(index);
    };

    const handleSelectPaymentMethod = (index) => {
        setSelectedPaymentMethod(index);
    }; 

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
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
                            <th></th>
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
            <div className='format-container'>
            <div className="billing-information">
                <div className='address'>
                    <h2>Direcciones registradas</h2>
                    <ul className="address-list">
                        {addresses.map((address, index) => (
                            <li
                                key={index}
                                className={`address-item ${selectedAddress === index ? 'selected' : ''}`}
                                onClick={() => handleSelectAddress(index)}
                            >
                                {`${address.houseNumber} ${address.street}, ${address.city}, ${address.state}`}
                            </li>
                        ))}
                    </ul>
                    <button className='add-address' onClick={() => setShowAddressForm(true)}><CiSquarePlus size={50}/>Agregar Dirección</button>
                    
                    {showAddressForm && (
                        <form onSubmit={handleAddAddress}>
                            <input
                                type="text"
                                name="houseNumber"
                                value={newAddress.houseNumber}
                                onChange={handleAddressChange}
                                placeholder="House Number"
                                required
                            />
                            <input
                                type="text"
                                name="street"
                                value={newAddress.street}
                                onChange={handleAddressChange}
                                placeholder="Street"
                                required
                            />
                            <input
                                type="text"
                                name="city"
                                value={newAddress.city}
                                onChange={handleAddressChange}
                                placeholder="City"
                                required
                            />
                            <input
                                type="text"
                                name="state"
                                value={newAddress.state}
                                onChange={handleAddressChange}
                                placeholder="State"
                                required
                            />
                            <button type="submit">Confirmar</button>
                        </form>
                    )}
                </div>
                <div className='payment-method'>
                    <h2>Metodos de pago</h2>
                    <ul className="payment-method-list">
                        {paymentMethods.map((method, index) => (
                            <li
                                key={index}
                                className={`payment-method-item ${selectedPaymentMethod === index ? 'selected' : ''}`}
                                onClick={() => handleSelectPaymentMethod(index)}
                            >
                                {`${method.cardType} - ${method.cardNumber} - ${method.ownerName} - ${formatDate(method.expirationDate)}`}
                            </li>
                        ))}
                    </ul>
                    
                    <button className='add-address' onClick={() => setShowPaymentForm(true)}><CiSquarePlus size={50}/>Agregar Metodo de Pago</button>
                    {showPaymentForm && (
                        <form onSubmit={handleAddPaymentMethod}>
                            <input
                                type="text"
                                name="cardType"
                                value={newPaymentMethod.cardType}
                                onChange={handlePaymentMethodChange}
                                placeholder="Card Type"
                                required
                            />
                            <input
                                type="text"
                                name="cardNumber"
                                value={newPaymentMethod.cardNumber}
                                onChange={handlePaymentMethodChange}
                                placeholder="Card Number"
                                required
                            />
                            <input
                                type="date"
                                name="expirationDate"
                                value={newPaymentMethod.expirationDate}
                                onChange={handlePaymentMethodChange}
                                placeholder="Expiration Date"
                                required
                            />
                            <input
                                type="text"
                                name="ownerName"
                                value={newPaymentMethod.ownerName}
                                onChange={handlePaymentMethodChange}
                                placeholder="Owner Name"
                                required
                            />
                            <input
                                type="number"
                                name="funds"
                                value={newPaymentMethod.funds}
                                onChange={handlePaymentMethodChange}
                                placeholder="Funds"
                                required
                            />
                            <button type="submit">Confirmar</button>
                        </form>)}
                </div>
            </div>
            
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
                        <button className='comprar'>Comprar</button>  
                    </div>  
                </div>
            
            </div>
        </div>
    );
};

export default Carrito;