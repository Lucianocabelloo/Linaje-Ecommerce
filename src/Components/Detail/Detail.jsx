import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./Estilos.css"

const Detail = ({ProductoListo}) => {
    const agregarAlCarrito = (cantidad) =>{
        //console.log(`Se Agrego ${cantidad} al carrito`)
    }
  return (
    <>
    <div>
        <h2>{ProductoListo.title}</h2>
        <div className='DetailDataContainer'> 
        <img src={ProductoListo.image} alt="Bolso" width={500} height={500}/>
        <div className='DataDetail'>
        <h3>{ProductoListo.description}</h3>
        <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Detail