import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../../Components/Detail/Detail'
import { doc, getDoc } from "firebase/firestore";
import "./Estilos.css"
import { db } from '../../Firebase/config';
import { AtomSpinner } from 'react-epic-spinners'


const ItemDetailContainer = () => {
    const [productoIndiviual, setproductoIndiviual] = useState([])
    const [loading, setLoading] = useState(true);
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
            setLoading(false)
        } 
        catch (error) {
        }
        })()

    }, [productId])

    return (
        <div>
            {
                loading ?  <div className='loading'>
                <AtomSpinner color="black"><h2>Loading</h2></AtomSpinner>
                </div>
                
                
                : <Detail ProductoListo={productoIndiviual}/>
            }
        </div>
    )
}

export default ItemDetailContainer