import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./AddProduct.css"

const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        brand: '',
        category: '',
        description: '',
        price: 0,
        stock: 0,
        imageRoute: ''
    });
    

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        
        if (!token) {
            navigate('/sign-in');
            return;
        }

        fetch('http://localhost:8080/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(product),
        })
            .then((response) => {
                if (response.ok) {
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                        navigate('/');
                    }, 3000);
                } else {
                    return response.json().then((errorData) => {
                        setError(errorData.message || 'Error al agregar producto');
                    });
                }
            })
            .catch((error) => {
                setError('Error de red al agregar producto');
            });
    };

    return (
        <div className="add-product-container">
            <h2>Agregar Producto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre del producto</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="brand">Marca</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={product.brand}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                <label htmlFor="category">Categoría</label>
                    <select
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="LAVARROPAS">Lavarropas</option>
                        <option value="NOTEBOOK">Notebook</option>
                        <option value="CLIMATIZACION">Climatizacíon</option>
                        <option value="HELADERA">Heladera</option>
                        <option value="CELULAR">Celular</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Precio</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="stock">Stock</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={product.stock}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imageRoute">URL de la imagen</label>
                    <input
                        type="text"
                        id="imageRoute"
                        name="imageRoute"
                        value={product.imageRoute}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Agregar Producto</button>
            </form>

            {success && <div className="success-message">¡Producto agregado con éxito!</div>}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default AddProduct;