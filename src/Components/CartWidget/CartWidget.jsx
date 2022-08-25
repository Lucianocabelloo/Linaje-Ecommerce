import React from 'react'
import "./Estilos.css"
import {BsCartPlus} from 'react-icons/bs';

const CartWidget = () => {
  return (
    <div className='carritoDiv'>
        <BsCartPlus className='carrito'/>
    </div>
  )
}

export default CartWidget