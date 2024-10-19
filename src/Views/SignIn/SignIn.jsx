import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import signUpImage from '../../assets/signUp.png';
import './SignIn.css';


const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            
            navigate(location.state?.from ? location.state.from : '/');

        } catch (error) {
            setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        }
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
                    {error && <p className="error">{error}</p>}
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