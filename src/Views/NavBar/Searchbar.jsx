import React, { useState } from "react"
import {FaSearch} from "react-icons/fa"
import "./Searchbar.css"

const Searchbar = ( {setResults} ) => {

    const[input, setInput] = useState("")

    const fetchProducts = (value) => {
        fetch("http://localhost:8080/product")
            .then(response => response.json())
            .then((json) => {
                const results = json.filter((product) => {
                    return (
                        value &&
                        product && 
                        product.name && 
                        product.name.toLowerCase().includes(value.toLowerCase()))
                });
                setResults(results);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchProducts(value);
    }

    return (
        <header>
            <div className="input-wrapper">
                <FaSearch id = "icono-buscador" />
                <input type="text" 
                placeholder="Type to search..." 
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </header>
    )
}

export default Searchbar