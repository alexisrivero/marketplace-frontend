import Carrusel from '../../Componentes/Carrusel/Carrusel';
import ProductList from "../../Componentes/ProductList/ProductList";
import './Home.css';
import React, {useEffect, useState} from 'react';


const Home = () => {
    const slides = [
        {url: "http://localhost:5173/image1.jpg", title: "Publicidad1"},
        {url: "http://localhost:5173/image2.jpg", title: "Publicidad2"},
        {url: "http://localhost:5173/image3.jpg", title: "Publicidad3"},
        {url: "http://localhost:5173/image4.jpg", title: "Publicidad4"},
        {url: "http://localhost:5173/image5.jpg", title: "Publicidad5"}
    ]

    const [data, setData] = useState([]);

    const URL = 'http://localhost:8080/product';
    
    const conteinerStyle = {
        width: '500px',
        height: '280px',
        margin: '0px auto'
    }
<<<<<<< HEAD

    const products = [
        {
            image: "https://images.fravega.com/f300/d504221275bde1ac2409394cf4455e3c.jpg.webp",
            name: "Producto 1",
            description: "Descripcion del producto 1",
            price: 100
        },
        {
            image: "https://images.fravega.com/f300/d504221275bde1ac2409394cf4455e3c.jpg.webp",
            name: "Producto 2",
            description: "Descripcion del producto 2",
            price: 200
        },
        {
            image: "https://images.fravega.com/f300/d504221275bde1ac2409394cf4455e3c.jpg.webp",
            name: "Producto 3",
            description: "Descripcion del producto 3",
            price: 300
        }
    ]
=======
    

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    

>>>>>>> db7a8b10bac7227baee9cc608a11d04ed590002e

    return (
        <div>
            <Carrusel slides={slides} />
            <ProductList products={data} />
        </div>
    )
}

export default Home