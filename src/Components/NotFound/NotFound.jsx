import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Estilos.css"

const NotFound = () => {
  const navigate = useNavigate()

  const Navegar = () =>{
    navigate("./")
  }
  return (
    <>
        <div class="message">
        <span>404 NOT FOUND 🚀</span>
        <span className='strong'>404</span>
        <div>
        <p class="title">ESTAS PERDIDO EN EL ESPACIO! </p>
        <p class="message-text">
            La pagina que estas intentando ver no existe o esta temporalmente 
            inhabilitada
        </p>
    </div>
    <div class="box-astronaut">
    <img src="https://raw.githubusercontent.com/ZajithCorro/404-not-found-page/e8ee0228f2daaa93f727e4b24ada76bd58c07594/docs/imgs/astronaut.e2b60a65821122a3377a8f0f01d68285.svg" alt="" />
        </div>
        <button class="button" onClick={Navegar}>GO BACK HOME</button>
    </div>
    </>
  )
}

export default NotFound