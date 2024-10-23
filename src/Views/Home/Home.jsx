import Carrusel from '../../Componentes/Carrusel/Carrusel';
import ProductList from "../../Componentes/ProductList/ProductList";
import './Home.css';
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';


const Home = () => {
    const slides = [
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729634968/image1_wjzkjc.jpg", title: "Publicidad1", productURL: "/product/3"},
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729634968/image2_ylpx4h.jpg", title: "Publicidad2", productURL: "/product/6"},
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729634969/image3_cms5ab.jpg", title: "Publicidad3", productURL: "/product/2"},
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729634969/image4_dxgnwy.jpg", title: "Publicidad4", productURL: "/product/8"},
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729634969/image5_xkg5i3.jpg", title: "Publicidad5", productURL: "/product/5"}
    ]

    const slides2 = [
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729634970/image6_rveslj.jpg", title: "Publicidad6", productURL: "/product/13"},
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729634982/image7_ysdodc.jpg", title: "Publicidad7", productURL: "/product/14"},
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729635048/image8_tgrgoy.jpg", title: "Publicidad8", productURL: "/product/12"},
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729635010/image9_n5ivbc.jpg", title: "Publicidad9", productURL: "/product/15"},
        {url: "https://res.cloudinary.com/dbwr86wxd/image/upload/v1729636809/image10_bdjzjv.jpg", title: "Publicidad10", productURL: "/product/16"}
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