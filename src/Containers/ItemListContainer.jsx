import React from 'react'
import "./Estilos.css"

const ItemListContainer = ({greeting,novedades}) => {
    return (
    <div>
        <h2 className='saludo'>{greeting}</h2>
        <h2 className='novedades'>{novedades}</h2>
    </div>
    )
}

export default ItemListContainer