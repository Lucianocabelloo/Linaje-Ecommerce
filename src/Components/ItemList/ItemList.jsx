import React from 'react'
import "./Estilos.css"
import Item from '../Item/Item'
import { AtomSpinner } from 'react-epic-spinners'


const ItemList = ({EnviarProductosItemList}) => {
  return (
    <>
    <div className='cardConteiner'>
        {EnviarProductosItemList.length ? EnviarProductosItemList.map(ProductoRecibidoListContainer =>{
          return <Item key={ProductoRecibidoListContainer.id} productoAMostrar={ProductoRecibidoListContainer}/>
        })
        :
        <AtomSpinner color="black"><h2>Loading</h2></AtomSpinner>
      }
    </div>
      </>
  )
}

export default ItemList