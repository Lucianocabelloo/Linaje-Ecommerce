import React from 'react'
import { useState } from 'react';
import { createContext } from "react"


export const Shop = createContext(null);


const CartContext = ({children}) => {
    const [mensaje, setMensaje] = useState({})
    return (
        <Shop.Provider value={{mensaje, setMensaje}} >
            {children}
        </Shop.Provider>
    )
}

export default CartContext
