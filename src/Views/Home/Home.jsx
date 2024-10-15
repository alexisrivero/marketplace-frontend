import Carrusel from '../../Componentes/Carrusel/Carrusel';
import Carrusel2 from '../../Componentes/Carrusel2/Carrusel2';
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

    const slides2 = [
        {url: "http://localhost:5173/image6.jpg", title: "Publicidad6"},
        {url: "http://localhost:5173/image7.jpg", title: "Publicidad7"},
        {url: "http://localhost:5173/image8.jpg", title: "Publicidad8"},
        {url: "http://localhost:5173/image9.jpg", title: "Publicidad9"}
    ]

    const [data, setData] = useState([]);

    const URL = 'http://localhost:8080/product';
    

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    


    return (
        <div>
            <Carrusel slides={slides} />
            <ProductList products={data} />
            <Carrusel2 slides2={slides2} />
            <ProductList products={data} />
        </div>
    )
}

export default Home