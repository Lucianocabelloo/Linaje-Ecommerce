import React from 'react'
import "./Estilos.css"
import {BsCartPlus} from 'react-icons/bs';
import { useContext } from 'react';
import { Shop } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {

const {cart} = useContext(Shop)

 const navigate = useNavigate()

 const moverme = () =>{
  navigate("/cart")
 }

  return (
    <> 
    <div className='carritoDiv'>
        <BsCartPlus onClick={moverme} className='carrito'/>
    <span clas className={cart.length ? '' : '0'} >                 
        {cart.length}                
    </span>
    </div>
    </>
  )
}

export default CartWidget