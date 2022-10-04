import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import "./Estilos.css"


const Detail = ({ProductoListo}) => {


  const { agregarItem} = useContext(Shop)
  const [qty, setQty] = useState(0)

    const navigate = useNavigate()
    
    
    const addCart = (quantity) => {
      setQty(quantity)
    }
    
    console.log(qty)
    
    const TerminarCompra = () =>{
      const productoGuardado = {...ProductoListo, quantity:qty};
      agregarItem(productoGuardado);
      navigate("../cart");
    }
  return (
    <>
    <div>
        
        <h2>{ProductoListo.title}</h2>
        <div className='DetailDataContainer'> 
        <img src={ProductoListo.image} alt="Bolso" width={500} height={500}/>
        <div className='DataDetail'>
        <h3>{ProductoListo.description}</h3>
        
        

        </div>
        {qty ? <button onClick={TerminarCompra}>Finalizar Compra</button>
        : <ItemCount initial={1} stock={5} onAdd={addCart}/>}
        </div>
    </div>
    </>
  )
}

export default Detail