import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './Carrusel2.css'

const Carrusel2 = ({slides2}) => {
    
    const [index, indexUser] = useState(0);
    const navigate = useNavigate();

    const izquierda = () => {
        const primerSlide = index === 0
        const nuevoIndice = primerSlide ? slides2.length - 1 : index - 1;
        indexUser(nuevoIndice)
    }
    
    const derecha = () => {
        const ultimoSlide = index === slides2.length - 1
        const nuevoIndice = ultimoSlide ? 0 : index + 1  
        indexUser(nuevoIndice)
    }

    const handleClick = () => {
        const productURL = slides2[index].productURL;
        if (productURL) {
            navigate(productURL); 
        } else {
            console.error("No product URL found for this slide.");
        }
    };

    return (
        <div className="conteiner2">
            <div className="sliderStyle">
                <div className="flechaIzq" onClick = {izquierda}>
                    <IoIosArrowBack />
                </div>
                <div className="flechaDer"  onClick = {derecha}>
                    <IoIosArrowForward />
                </div>
                <div
                    className="slideStyle"
                    style={{ backgroundImage: `url(${slides2[index].url})` }}
                    onClick={handleClick} 
                ></div>
            </div>
        </div>
    )
}

export default Carrusel2