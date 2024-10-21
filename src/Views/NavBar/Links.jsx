import "./Links.css"
import React, {useState, useEffect} from "react";
import { MdMenu } from "react-icons/md";

const Links = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const URL = 'http://localhost:8080/product/category';

    const [categories, setCategories] = useState([]);
    
    
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