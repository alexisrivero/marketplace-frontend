import "./Links.css"
import React, {useState, useEffect} from "react";
import { MdMenu } from "react-icons/md";

const Links = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const URL = 'http://localhost:8080/product/category';

    const [categories, setCategories] = useState([]);

    const [isAdmin, setIsAdmin] = useState(false);
    
    
    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const showDropdown = () => {
        setDropdownVisible(true);
    };

    const hideDropdown = () => {
        setDropdownVisible(false);
    };

    const decodeJWT = () => {
        const token = localStorage.getItem('token');
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    };

    useEffect(() => {
        const decodedToken = decodeJWT();
        if (decodedToken?.rol === "ADMIN") {
            setIsAdmin(true);
        }
    }, []);

    return (
        <section className="links"> 
            <nav>
                <ul>
                    <li onMouseOver={showDropdown} onMouseLeave={hideDropdown}>
                        <a>
                            <MdMenu size={23}/> 
                        </a>
                        <a>Categorias</a>
                    </li>
                    <li>
                        <a href="/contact">Contacto</a>
                    </li>
                    <li>
                        <a href="/about">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="/sign-up">Registrarse</a>
                    </li>
                    {isAdmin && (
                        <li>
                            <a href="/add-product">Agregar productos</a>
                        </li>
                    )}
                </ul>
            </nav>
            {isDropdownVisible && (
                            <ul className="dropdown" onMouseOver={showDropdown} onMouseLeave={hideDropdown}>
                                {categories.map(category => (
                                    <li key={category.id}>
                                        <a href={`/category/${category.categoryName}`}>{category.categoryName}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
        </section>
    )
}

export default Links