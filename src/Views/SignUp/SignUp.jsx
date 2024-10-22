import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signUpImage from '../../assets/signUp.png';
import './SignUp.css';


const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        role: 'USER',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();


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
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Sign up failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            
            navigate('/');

        } catch (error) {
            setError('Error al registrarse. Por favor, verifica tus credenciales.');
        }
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
                            type="text"
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
                            type="text"
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
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Numero de teléfono:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
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
                    <button type="submit">Registrarse</button>
                </form>
                <div className='signup-container'>
                    <p>¿Ya tienes cuenta?</p>
                    <a href="/sign-in">Iniciar sesión</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;