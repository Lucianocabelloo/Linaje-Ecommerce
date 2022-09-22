import React from 'react'
import { useState } from 'react';
import { createContext } from "react"

export const Shop = createContext(null);



const CartContext = ({children}) => {

    
    const [cart, setCart] = useState([])


    const removeItem = (item) => {
        const productoRepetido = existeEnElCarrito(item.id)
        if(productoRepetido){
            const itemAEliminar = cart.find(product => product.id === item.id)
            const index = cart.indexOf(itemAEliminar)
            cart.splice(index,1)
            console.log(cart)        
        }
        else{
            console.log('El item que se quiere eliminar no existe')
        }
    }

    const limpiarCarrito = () =>{
        const vaciar = []
        setCart(vaciar)
    }
    
        const existeEnElCarrito = (id) =>{
            return cart.some(ProductoListo => ProductoListo.id === id)
        }
        
    const agregarItem = (item) =>{
        const productoRepetido = existeEnElCarrito(item.id)
        if (productoRepetido){
            const carritoModificado = cart.map(producto => {
                if (producto.id === item.id){
                    producto.quantity += item.quantity
                    return producto
                }
                return producto
            })
            setCart(carritoModificado)
        }
        else{
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
        //Remover item
        
        
    }
    return (

        <Shop.Provider value={{cart,agregarItem,removeItem,limpiarCarrito}}>
            {children}
        </Shop.Provider>
    )
}

export default CartContext