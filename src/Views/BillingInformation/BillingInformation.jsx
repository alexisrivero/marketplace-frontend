import React, { useState, useEffect } from 'react';
import './BillingInformation.css';

const BillingInformation = () => {
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
            return response.json();
        })
        .then(() => {
            fetchAddresses(); // Fetch updated addresses after adding a new one
            setShowAddressForm(false);
            setShowPaymentForm(true); // Show payment form after adding address
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
            return response.json();
        })
        .then(() => {
            fetchPaymentMethods(); // Fetch updated payment methods after adding a new one
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

    return (
        <div className="billing-information">
            <h1>Billing Information</h1>
            <h2>Addresses</h2>
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
            <button onClick={() => setShowAddressForm(true)}>Add Address</button>
            
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
                    <button type="submit">Submit</button>
                </form>
            )}

            <h2>Payment Methods</h2>
            <ul>
                {paymentMethods.map((method, index) => (
                    <li key={index}>{`${method.cardType} - ${method.cardNumber} - ${method.ownerName} - ${method.expirationDate}`}</li>
                ))}
            </ul>
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
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default BillingInformation;