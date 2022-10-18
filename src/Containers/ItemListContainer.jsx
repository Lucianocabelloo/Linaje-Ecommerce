import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../Components/ItemList/ItemList'
import "./Estilos.css"
import { db } from '../Firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({greeting,novedades}) => {


    const [productos, setproductos] = useState([])



    const {categoryId} = useParams();
    
useEffect(() => {

    (async () =>{

        try {
                const q = categoryId ? query(collection(db, "products"),where("category", "==", categoryId) )
                                    : query(collection(db, "products"))
                const productosFirebase = [];

                const querySnapshot = await getDocs(q);
                
                querySnapshot.forEach((doc) => {

                productosFirebase.push({id: doc.id, ...doc.data()})
                });
                setproductos(productosFirebase)
        } catch (error) {

        }    
    })()


},[categoryId])




    return (
    <div className='container'>
        <h2 className='saludo'>{greeting}</h2>
        <ItemList EnviarProductosItemList={productos}/>
    </div>
    )
}

export default ItemListContainer