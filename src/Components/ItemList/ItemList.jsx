import React from 'react'
import "./Estilos.css"
import Item from '../Item/Item'

const ItemList = ({EnviarProductosItemList}) => {
  return (
    <div className='cardConteiner'>
        {EnviarProductosItemList.map(ProductoRecibidoListContainer =>{
            return <Item key={ProductoRecibidoListContainer.id} productoAMostrar={ProductoRecibidoListContainer}/>
        })}
    </div>
  )
}

export default ItemList