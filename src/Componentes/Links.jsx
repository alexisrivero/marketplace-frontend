import "./Links.css"
import { MdMenu } from "react-icons/md";

const Links = () => {
    return (
        <section className="links"> 
            <nav>
                <ul>
                    <li>
                        <a href="/categories"><MdMenu size={23}/></a>
                        <a href="/categories">Categorias</a>
                    </li>
                    <li>
                        <a href="/contact">Contacto</a>
                    </li>
                    <li>
                        <a href="/about">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="/signup">Registrarse</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Links