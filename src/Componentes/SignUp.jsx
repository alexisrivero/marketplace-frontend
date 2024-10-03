import React, { useState } from 'react';
import signUpImage from '../assets/signUp.png';
import './SignUp.css';


const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName:'',
        email: '',
        password: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='signup-container'>
            <div className="signup-image">
                <img src={signUpImage} alt="signup" />
            </div>
            <div className="form-container">
                <h2>Crear una cuenta nueva</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Apellido:</label>
                        <input
                            type="lastName"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;