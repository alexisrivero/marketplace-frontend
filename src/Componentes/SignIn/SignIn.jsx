import React, { useState } from 'react';
import signUpImage from '../../assets/signUp.png';
import './SignIn.css';


const SignIn = () => {
    const [formData, setFormData] = useState({
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
        <div className='signin-container'>
            <div className="signin-image">
                <img src={signUpImage} alt="signup" />
            </div>
            <div className="form-container">
                <h2>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Iniciar sesión</button>
                </form>
                <div className='signup-container'>
                    <p>¿No tienes cuenta?</p>
                    <a href="/sign-up">Regístrate aquí</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;