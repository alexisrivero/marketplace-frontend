import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './Carrusel.css'

const Carrusel = ({slides}) => {
    
    //useState Hook
    const [index, indexUser] = useState(0);

    const izquierda = () => {
        const primerSlide = index === 0
        const nuevoIndice = primerSlide ? slides.lenght - 1 : index - 1  
        indexUser(nuevoIndice)
    }
    
    const derecha = () => {
        const ultimoSlide = index === slides.lenght - 1
        const nuevoIndice = ultimoSlide ? 0 : index + 1  
        indexUser(nuevoIndice)
    }

    return (
        <div className="sliderStyle">
            <div className="flechaIzq" onClick = {izquierda}>
                <IoIosArrowBack />
            </div>
            <div className="flechaDer"  onClick = {derecha}>
                <IoIosArrowForward />
            </div>
            <div
                className="slideStyle"
                style={{ backgroundImage: `url(${slides[index].url})` }}
            ></div>
      </div>
    )
}

export default Carrusel