import "./Navbar.css"
import {FaSearch} from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
import Links from "./Links";

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <nav>
                    <div className='logo'>
                        <a href="/">
                        <h2>Marketplace Grupo 2</h2>
                        </a>
                    </div>
                    <div className="input-wrapper">
                <       FaSearch id = "icono-buscador" />
                        <input type="text" placeholder="Buscar producto..." />
                     </div>
                    <div className="nav-link">
                        <a href="/carrito">
                            <AiOutlineShoppingCart size={30} />
                        </a>
                        <a href="/favoritos">
                            <LuHeart size={30}/>
                        </a>
                    </div>
                </nav>
            </div>
            <Links/>
        </header>
    )
}

export default Navbar
