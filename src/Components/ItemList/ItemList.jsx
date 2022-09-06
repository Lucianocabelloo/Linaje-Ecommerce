import React from 'react'
import Item from '../Item/Item'

const ItemList = ({EnviarProductosItemList}) => {
  return (
    <div>
        {EnviarProductosItemList.map(ProductoRecibidoListContainer =>{
            return <Item key={ProductoRecibidoListContainer.id} productoAMostrar={ProductoRecibidoListContainer}/>
        })}
    </div>
  )
}

export default ItemList