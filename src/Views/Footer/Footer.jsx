import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import "./Footer.css";


const Footer = () => {
    return (
        <footer>
        <div className="exclusive-container">
            <div className="tittle">
                <h3>Ofertas</h3>
            </div>
            <div className="content">
            <p>Hace tu primera compra y </p>
            <p>Obtene un 15% de descuento</p>
            <p>En el total de la compra</p>
            </div>
            
        </div>
        <div className="contact-container">
            <div className="tittle">
                <h3>Contacto</h3>
            </div>
            <div className="content">
                <p>Av. Siempreviva 742, Buenos Aires, Argentina</p>
                <p>+54 123456789</p>
                <p>marketplace@gmail.com.ar </p>
            </div>
        </div> 
        <div className="account-container">
            <div className="tittle">
                <h3>Cuenta</h3>
            </div>
            <div className="content">
                <Link to="/sign-in">Iniciar sesión</Link>
                <Link to="/sign-up">Registrarse</Link>
                <Link to="/about">Sobre Nosotros</Link>
            </div>
        </div>
        <div className="social-container">
            <div className="tittle">
                <h3 className="socials">Seguinos en nuestras redes</h3>
                <div className="content">
                <Link to="facebook.com"><FaFacebookSquare size={25}/></Link>
                <Link to="instagram.com"><FaInstagramSquare size={25}/></Link>
                <Link to="twitter.com"><FaTwitterSquare size={25}/></Link>
            </div>
            </div>
        </div>

        </footer>
    );
};

export default Footer;