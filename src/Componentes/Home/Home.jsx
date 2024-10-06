import Carrusel from "../Carrusel/Carrusel";
import ProductList from "../ProductList/ProductList";
import './Home.css';


const Home = () => {
    const slides = [
        {url: "http://localhost:5173/image1.jpg", title: "Publicidad1"},
        {url: "http://localhost:5173/image2.jpg", title: "Publicidad2"},
        {url: "http://localhost:5173/image3.jpg", title: "Publicidad3"},
        {url: "http://localhost:5173/image4.jpg", title: "Publicidad4"},
        {url: "http://localhost:5173/image5.jpg", title: "Publicidad5"}
    ]
    
    const conteinerStyle = {
        width: '500px',
        height: '280px',
        margin: '0px auto'
    }
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

    return (
        <div>
            <Carrusel slides={slides} />
            <ProductList products={products} />
        </div>
    )
}

export default Home