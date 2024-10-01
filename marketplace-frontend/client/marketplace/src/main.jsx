import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render( //main va a ser el encargado de mostrar por pantalla a app y renderizarlo por pantalla 
  <StrictMode>
    <App />
  </StrictMode>,
)
