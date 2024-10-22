import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

    const navigate = useNavigate();

    const handleMoreClick = () => {
        navigate('/contact');
    };

    return (
        <body className='cuerpo'>
            <div className='cabecera'>
                <h2>Sobre nosotros!</h2>
                <p>En Marketplace Grupo 2, nos especializamos en ofrecer una plataforma confiable y accesible para la compra y venta de productos electrónicos y electrodomésticos. Desde celulares hasta lavarropas, reunimos a vendedores con compradores interesados en adquirir productos de calidad, todo en un solo lugar.
                Nuestro marketplace facilita a los vendedores la posibilidad de expandir su negocio de forma online, permitiéndoles gestionar sus productos, llegar a más clientes y concretar ventas de manera sencilla. A su vez, ofrecemos a los compradores una experiencia de compra segura, con una amplia variedad de productos de marcas reconocidas a precios competitivos.</p>
            </div>
            <div className='container-sobrenos'>
                <section className='sobrenos'>
                    <div className='imagen'>
                        <img src="https://res.cloudinary.com/dbwr86wxd/image/upload/v1729636717/aboutus_kut2u8.jpg"/>
                    </div>
                    <div className='contenido'>
                        <h2>MARKETPLACE</h2>
                        <p>En este Marketplace, trabajamos para conectar a las personas con la tecnología que necesitan, todo mientras apoyamos a los comercios a crecer y prosperar.</p>
                        <button className='mas' onClick={handleMoreClick}>Más...</button>
                    </div>
                </section>
            </div>
        </body>
    )
}

export default AboutUs