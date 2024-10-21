import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <a href={`/product/${product.id}`}>
            <img src={product.imageRoute} alt={product.name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-category">{product.category}</p>
                <p className='product-brand'>{product.brand}</p>
                <p className="product-price">${product.price}</p>
            </div>
            </a>
        </div>
    );
};

export default ProductCard;