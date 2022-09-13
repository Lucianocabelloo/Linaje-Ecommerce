import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../Components/ItemList/ItemList'
import "./Estilos.css"

const ItemListContainer = ({greeting,novedades}) => {


    const [productos, setproductos] = useState([])

    const {categoryId} = useParams();
useEffect(() => {

    (async () =>{
        try {
            if (categoryId) {
                const ObtenerProductos = await fetch (`https://fakestoreapi.com/products/category/${categoryId}`)
                const productosObtenidos = await ObtenerProductos.json()
                setproductos(productosObtenidos) 
            } else {
                const ObtenerProductos = await fetch ("https://fakestoreapi.com/products")
                const productosObtenidos = await ObtenerProductos.json()
                setproductos(productosObtenidos)
                
            }
        } catch (error) {
            console.log("No se pudieron traer los objetos")
        }    
    })()


},[categoryId])




    return (
    <div>
        <h2 className='saludo'>{greeting}</h2>
        <ItemList EnviarProductosItemList={productos}/>
    </div>
    )
}

export default ItemListContainer