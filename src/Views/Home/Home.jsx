import Carrusel from '../../Componentes/Carrusel/Carrusel';

import ProductList from "../../Componentes/ProductList/ProductList";
import './Home.css';
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';


const Home = () => {
    const slides = [
        {url: "http://localhost:5173/image1.jpg", title: "Publicidad1", productURL: "/product/3"},
        {url: "http://localhost:5173/image2.jpg", title: "Publicidad2", productURL: "/product/6"},
        {url: "http://localhost:5173/image3.jpg", title: "Publicidad3", productURL: "/product/2"},
        {url: "http://localhost:5173/image4.jpg", title: "Publicidad4", productURL: "/product/8"},
        {url: "http://localhost:5173/image5.jpg", title: "Publicidad5", productURL: "/product/5"}
    ]

    const slides2 = [
        {url: "http://localhost:5173/image6.jpg", title: "Publicidad6", productURL: "/product/13"},
        {url: "http://localhost:5173/image7.jpg", title: "Publicidad7", productURL: "/product/14"},
        {url: "http://localhost:5173/image8.jpg", title: "Publicidad8", productURL: "/product/12"},
        {url: "http://localhost:5173/image9.jpg", title: "Publicidad9", productURL: "/product/15"},
        {url: "http://localhost:5173/image10.jpg", title: "Publicidad10", productURL: "/product/16"}
    ]

    const location = useLocation(); 

    const [data, setData] = useState([]);

    const [data2, setData2] = useState([]);


    const URL = 'http://localhost:8080/product';

    const URL2 = 'http://localhost:8080/product';

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    useEffect(() => {
        fetch(URL2)
        .then(response => response.json())
        .then(data2 => setData2(data2))
        .catch(error => console.error('Error fetching data:', error));
    }, []);



    return (
        <div>
            <Carrusel slides={slides} />
            <ProductList products={data} titulo = 'Lavarropas de calidad' />
            <Carrusel slides={slides2} />
            <ProductList products={data2} titulo = 'Lo mejor para este verano' />
        </div>
    )
}

export default Home 