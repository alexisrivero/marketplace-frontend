import ProductCard from "../ProductCard/ProductCard";
import './ProductList.css';


const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            <div className="list-name">
                <h2>Productos</h2>
            </div>
            <div className="products">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;

