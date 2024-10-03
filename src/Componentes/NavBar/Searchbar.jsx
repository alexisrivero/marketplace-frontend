import React from "react"
import {FaSearch} from "react-icons/fa"
import "./Searchbar.css"

const Searchbar = () => {
    return (
        <header>
            <div className="input-wrapper">
                <FaSearch id = "icono-buscador" />
                <input type="text" placeholder="Type to search..." />
            </div>
        </header>
    )
}

export default Searchbar