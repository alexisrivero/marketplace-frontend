import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
import Links from "./Links";
import Searchresultslist from "./Searchresultslist.jsx";
import Searchbar from "./Searchbar.jsx";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchbarRef = useRef(null); // Referencia para la Searchbar y resultados

    // Maneja el clic fuera de la lista de búsqueda para cerrarla
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchbarRef.current && !searchbarRef.current.contains(event.target)) {
                setShowResults(false); // Cierra la lista si el clic ocurre fuera
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearchResults = (newResults) => {
        setResults(newResults);
        setShowResults(true); // Mostrar la lista de resultados cuando se actualiza la búsqueda
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <a href="/">
                            <h2>Marketplace Grupo 2</h2>
                        </a>
                    </div>
                    <div className="Searchbar-container" ref={searchbarRef}>
                        <Searchbar setResults={handleSearchResults} />
                        {showResults && (
                            <Searchresultslist results={results} onClose={() => setShowResults(false)} />
                        )}
                    </div>
                    <div className="nav-link">
                        <a href="/carrito">
                            <AiOutlineShoppingCart size={30} />
                        </a>
                        <a href="/favoritos">
                            <LuHeart size={30} />
                        </a>
                    </div>
                </nav>
            </div>
            <Links />
        </header>
    );
};

export default Navbar;