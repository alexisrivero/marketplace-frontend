import "./Links.css"
import React, {useState} from "react";
import { MdMenu } from "react-icons/md";

const Links = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

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
                                <li><a href="/categories/1">Categoria 1</a></li>
                                <li><a href="/categories/2">Categoria 2</a></li>
                                <li><a href="/categories/3">Categoria 3</a></li>
                            </ul>
                        )}
        </section>
    )
}

export default Links