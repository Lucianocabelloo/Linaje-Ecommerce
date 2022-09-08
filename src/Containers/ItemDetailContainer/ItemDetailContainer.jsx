import React from 'react'
import { useState,useEffect } from 'react'
import Detail from '../../Components/Detail/Detail'


const ItemDetailContainer = () => {
    const [productoIndiviual, setproductoIndiviual] = useState([])

    useEffect(() => {
        (async () =>{
            const obtenerUnProducto = await fetch('https://fakestoreapi.com/products/1')
        const Promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(obtenerUnProducto.json())
            }, 2000);
            // Aqui termina Settimeout
            
        })
        try {
            const productoIndividualObtenido = await Promesa
            setproductoIndiviual(productoIndividualObtenido)
            console.log(productoIndividualObtenido)
        } catch (error) {
            console.log(error)
        }
        // Aqui termina el tryCatch
        })()
//Aqui termina Async
    }, [])
    // Aqui termina use efect
    

  return (
    <div>
        <Detail ProductoListo={productoIndiviual}/>
    </div>
  )
}

export default ItemDetailContainer