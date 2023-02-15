import React from 'react'
import { useState } from 'react';
import { createContext } from "react"

export const Shop = createContext(null);



const CartContext = ({children}) => {

    
    const [cart, setCart] = useState([])

    const total = () =>{
        const total = cart.reduce((acc, producto) => acc += producto.quantity * producto.price, 0)
        return total
    }

    const removeItem = (itemABorrar) => {
        const itemQueSeFiltra = cart.filter(item => item !== itemABorrar)
        setCart(itemQueSeFiltra)
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
        
    }
    return (

        <Shop.Provider value={{cart,agregarItem,removeItem,limpiarCarrito,total}}>
            {children}
        </Shop.Provider>
    )
}

export default CartContext
