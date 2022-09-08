import React, { useEffect, useState } from 'react'
import "./Estilos.css"

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    
    const add = () =>{
        if (count < stock) {    
            setCount(count + 1)
            
        }
        else{
           // console.warn("No Hay Stock")
        }
    }
    
    const decrement = () => {
        if (count >= 1){
            setCount(count - 1)
        }
        else{
            //console.warn("No podes bajar menos que 0")
        }
    }

    const addCart = () =>{
        onAdd(count)
        setCount(0)
    }
    const stockdispo = stock - count


    useEffect(() => {
    //console.info("Se monto el estado")

    }, [])
    

    useEffect(() => {
       // console.info("Se actualiza el estado")
    }, [count])
    
    
    return (
    <div className='ocultar'>
        <h2>{count}</h2>
        <button onClick={add}>Agregar item</button>
        <button onClick={decrement}>Eliminar Item</button>
        <button onClick={addCart}>Agregar al carrito</button>
        <h2>Stock Disponible {stockdispo}</h2>
    </div>
  )
}

export default ItemCount