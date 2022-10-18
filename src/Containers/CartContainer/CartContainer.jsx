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


        const confirmarCompra = () =>{
            navigate("/Formulario")
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
                            <th><button className='total-btn btn btn-primary' onClick={confirmarCompra}>Confirmar Compra</button></th>      
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
                                        <button className='remove-btn btn btn-danger' onClick={eliminarItem}>Eliminar Item</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                    <button className='remove-btn btn btn-danger limpiar' onClick={limpiarCarrito}>Limpiar Carrito</button>
                </table>
            </div>
            :
            <div className="vacio">
                <h2>No se encuentran items dentro del carrito</h2>
                <button className="btn-return btn btn-primary" onClick={returnHome}>Volver al inicio</button>
            </div>
        )
        
    }


    export default CartContainer                 