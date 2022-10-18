import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import "./Estilos.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Detail = ({ProductoListo}) => {


  const { agregarItem} = useContext(Shop)
  const [qty, setQty] = useState(0)

    const navigate = useNavigate()
    
    
    const addCart = (quantity) => {
      setQty(quantity)
    }
    
    
    const TerminarCompra = () =>{
      const productoGuardado = {...ProductoListo, quantity:qty};
      agregarItem(productoGuardado);
      navigate("../cart");
      const MySwal = withReactContent(Swal)
      MySwal.fire({
        title: <p>Se agrego su producto correctamente</p>,
        text:`Se ha enviado el producto al carrito`
        })
    }
  return (
    <>
    <div>
        
        <div className='DetailDataContainer'> 
        <img src={ProductoListo.image} alt="Bolso" width={500} height={500}/>
        <div className='DataDetail'>

        <h2>{ProductoListo.title}</h2>
        <h3>{ProductoListo.description}</h3>

        </div>
        {qty ? <button className="btn btn-primary" onClick={TerminarCompra}>Finalizar Compra</button>
        : <ItemCount initial={1} stock={ProductoListo.stock} onAdd={addCart}/>}
        </div>
    </div>
    </>
  )
}

export default Detail