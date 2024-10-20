import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './Carrusel.css'

const Carrusel = ({slides}) => {
    //useState Hook
    const [index, indexUser] = useState(0);
    const navigate = useNavigate();

    const izquierda = () => {
        const primerSlide = index === 0
        const nuevoIndice = primerSlide ? slides.length - 1 : index - 1;
        indexUser(nuevoIndice)
    }
    
    const derecha = () => {
        const ultimoSlide = index === slides.length - 1
        const nuevoIndice = ultimoSlide ? 0 : index + 1  
        indexUser(nuevoIndice)
    }

    const handleClick = () => {
        const productURL = slides[index].productURL;
        if (productURL) {
            navigate(productURL); 
        } else {
            console.error("No product URL found for this slide.");
        }
    };

    return (
        <div className="conteiner">
            <div className="sliderStyle">
                <div className="flechaIzq1" onClick = {izquierda}>
                    <IoIosArrowBack />
                </div>
                <div className="flechaDer1"  onClick = {derecha}>
                    <IoIosArrowForward />
                </div>
                <div
                    className="slideStyle"
                    style={{ backgroundImage: `url(${slides[index].url})` }}
                    onClick={handleClick} 
                ></div>
            </div>
        </div>
    )
}

export default Carrusel