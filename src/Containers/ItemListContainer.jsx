import React from 'react'
import { useState,useEffect } from 'react'
import ItemList from '../Components/ItemList/ItemList'
import "./Estilos.css"

const ItemListContainer = ({greeting,novedades}) => {


    const [productos, setproductos] = useState([])

useEffect(() => {

    (async () =>{
        const ObtenerProductos = await fetch ("https://fakestoreapi.com/products")
        


        try {
            const productosObtenidos = await ObtenerProductos.json()
            setproductos(productosObtenidos)
        } catch (error) {
            console.log("No se pudieron traer los objetos")
        }
        
    })()


},[])




    return (
    <div>
        <h2 className='saludo'>{greeting}</h2>
        <ItemList EnviarProductosItemList={productos}/>
    </div>
    )
}

export default ItemListContainer