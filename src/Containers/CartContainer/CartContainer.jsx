import React from 'react'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Shop } from '../../Components/Context/CartContext'
import "./Estilos.css";
import generarOrden from '../../Services/generarOrden';



const CartContainer = () => {

  const {cart,removeItem,limpiarCarrito,total} = useContext(Shop)
  const navigate = useNavigate()

    const returnHome = () => {
        navigate('/')}


        const confirmarCompra = () =>{
            const importe = total()
            const generar = generarOrden("Luciano", "luciano23@gmail.com", 3815172093, cart, importe,new Date().toLocaleString());
            console.log(generar)
        }

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
                            <th><button className='total-btn' onClick={confirmarCompra}>Confirmar Compra</button></th>      
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