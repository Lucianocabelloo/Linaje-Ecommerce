import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Components/Context/CartContext'
import "./Estilos.css";



const CartContainer = () => {

  const {cart,removeItem,limpiarCarrito} = useContext(Shop)
  return (

    <div className="container">
    <table className='tabla-container'>
        <thead>
            <tr className='tr-item-row'>
                <th className='Titulos'>Unidades</th>
                <th className='Titulos'>Producto</th>
                <th className='Titulos'>Titulo</th>
                <th className='Titulos'>Precio unitario</th>
                <th className='Titulos'>Precio Total</th>     
                <th>
        <button onClick={limpiarCarrito}> Vaciar Carrito</button>

                </th>
            </tr>
        </thead>
        {
          cart.map((item) => {
                const eliminarItem = () => {
                  removeItem(item)
                }       
                return(
                  <>
                    <tbody key={item.id}>
                        <tr className="tr-item">
                            <td>{item.quantity}</td>
                            <td> <img  className='td-IMG' src={item.image} alt={item.title} /> </td>
                            <td>{item.title}</td>
                            <td>$ {item.price}</td>
                            <td>$ {(item.quantity * item.price).toFixed(2)}</td>                                    
                            <td>
                            <button className='remove-btn' onClick={eliminarItem}>Eliminar Item</button>
                            </td>
                        </tr>
                    </tbody>
                  </>
                )
            })
          }
    </table>
</div>
  )
}

export default CartContainer