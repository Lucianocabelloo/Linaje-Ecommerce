import React from 'react'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Shop } from '../../Components/Context/CartContext'
import "./Estilos.css";



const CartContainer = () => {

  const {cart,removeItem,limpiarCarrito} = useContext(Shop)
  const navigate = useNavigate()

    const returnHome = () => {
        navigate('/')}

        return(
            cart.length ?
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th className='Titulos'>Unidades</th>
                            <th className='Titulos'>Producto</th>
                            <th className='Titulos'>Titulo</th>
                            <th className='Titulos'>Precio unitario</th>
                            <th className='Titulos'>Precio Total</th>
                            <th><button className='remove-btn' onClick={limpiarCarrito}>Limpiar Carrito</button></th>      
                        </tr>
                    </thead>
                    {
                        cart.map((item) => {
                            const eliminarItem = () => {
                                removeItem(item)
                            }       
                            return(
                                <tbody key={item.id}>
                                    <tr className="tr-item">
                                        <td>{item.quantity}</td>
                                        <td clas> <img className='td-IMG' src={item.image} alt={item.title} /> </td>
                                        <td>{item.title}</td>
                                        <td>$ {item.price}</td>
                                        <td>$ {(item.quantity * item.price).toFixed(2)}</td>                                    
                                        <td>
                                        <button className='remove-btn' onClick={eliminarItem}>Eliminar Item</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
            :
            <div className="empty">
                <h2>No se encuentran items dentro del carrito</h2>
                <button className="btn-return" onClick={returnHome}>Volver al inicio</button>
            </div>
        )
    }

    export default CartContainer