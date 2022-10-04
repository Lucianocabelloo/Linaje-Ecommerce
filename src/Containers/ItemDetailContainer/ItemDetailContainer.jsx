import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../../Components/Detail/Detail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';


const ItemDetailContainer = () => {
    const [productoIndiviual, setproductoIndiviual] = useState([])

    const {productId} = useParams()

    useEffect(() => {
        (async () =>{
            
            try {
            const docRef = doc(db, "products", productId);
            const docSnap = await getDoc(docRef);
            docSnap.exists 
            ? setproductoIndiviual({id:docSnap.id , ...docSnap.data()})
            :
            alert("No se encontro el producto!");
            
        } catch (error) {
            console.log(error)
        }
        })()

    }, [productId])

    return (
        <div>
            {
                productoIndiviual.length ? <h2>Loading...</h2>
                
                : <Detail ProductoListo={productoIndiviual}/> 
            }
        </div>
    )
}

export default ItemDetailContainer