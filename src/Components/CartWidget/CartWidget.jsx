import React from 'react'
import "./Estilos.css"
import {BsCartPlus} from 'react-icons/bs';
import { useContext } from 'react';
import { Shop } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
  const navigate = useNavigate()

const {cart} = useContext(Shop)

const cantidades = cart.map((producto) => producto.quantity)
const cantTotal = cantidades.reduce((a,b) => a + b, 0)

const goCart = () =>{
  navigate("./cart")
}


  return (
    <> 
    <div  onClick={goCart} className='carritoDiv'>
        <BsCartPlus className='carrito'/>
    <span >{cart.length && cantTotal}</span>              
    </div>
    </>
  )
}

export default CartWidget