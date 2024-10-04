import Navbar from './Componentes/Navbar'
import Links from './Componentes/Links'
import Carrusel from './Componentes/Carrusel';

function App() {

  const slides = [
    {url: "http://localhost:5173/image1.jpg", title: "Publicidad1"},
    {url: "http://localhost:5173/image2.jpg", title: "Publicidad2"},
    {url: "http://localhost:5173/image3.jpg", title: "Publicidad3"}
  ]

  const conteinerStyle = {
    width: '500px',
    height: '280px',
    margin: '0px auto'
  }

  return (
    <div>
      <Navbar/>
      <Links/>
      <div style={conteinerStyle}> 
        <Carrusel slides={slides}/>
      </div>
    </div>
  ) //tengo que retornar dentro de app el componente en forma de etiqueta html siempre
}

export default App
