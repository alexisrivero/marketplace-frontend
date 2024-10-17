import ProductList from '../../Componentes/ProductList/ProductList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Category = () => {

    const [data, setData] = useState([]);
    const location = useLocation();
    const URL = `http://localhost:8080/product${location.pathname}`;
    const category = location.pathname.split('/')[2];
    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    
    return (
        <div>
            <ProductList products={data} titulo={category}/>
        </div>
    );
}

export default Category