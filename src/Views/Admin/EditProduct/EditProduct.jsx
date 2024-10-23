import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../AddProduct.css"

const EditProduct = () => {
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

    useEffect(() => {
        const storedProduct = localStorage.getItem('productToEdit');
        console.log('Stored Product:', storedProduct); // Verificar contenido
        if (storedProduct) {
            try {
                setProduct(JSON.parse(storedProduct));
            } catch (error) {
                console.error('Error parsing JSON from localStorage:', error);
            }
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        
        if (!token) {
            navigate('/sign-in');
            return;
        }

        console.log("producto id" + product.id)

        fetch(`http://localhost:8080/product/${Number(product.id)}`, {
            method: 'PUT',
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
                        console.error('Error al editar producto:', errorData); // Para depuración
                        setError(errorData.message || 'Error al editar producto');
                    });
                }
            })
            .catch((error) => {
                console.error('Error de red al editar producto:', error); // Para depuración
                setError('Error de red al editar producto');
            });
    };

    return (
        <div className="add-product-container">
            <h2>Editar Producto</h2>
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
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleInputChange}
                        required
                    />
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
                <button type="submit">Editar Producto</button>
            </form>

            {success && <div className="success-message">¡Producto editado con éxito!</div>}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default EditProduct;