import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <a href={`/product/${product.id}`}>
            <img src={product.imageRoute} alt={product.name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-category">{product.category} - {product.brand}</p>
                <h1 className="product-price">${product.price}</h1>
            </div>
            </a>
        </div>
    );
};

export default ProductCard;