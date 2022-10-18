import React, {useState } from 'react'
import "./Estilos.css"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial)
    const MySwal = withReactContent(Swal);
    
    const add = () =>{
        if (count < stock) {    
            setCount(count + 1)
            
        }
        else{
            MySwal.fire({
                icon: 'warning',
                position:'top',
                title: <p>No hay mas productos en stock</p>,
                onOpen: () => {
                    setTimeout(() => MySwal.clickConfirm(), 1000);
                  }
                });

        }
    }
    
    const decrement = () => {
        if (count >= 1){
            setCount(count - 1)
        }
        else{
            MySwal.fire({
                icon: 'warning',
                position:'top',
                title: <p>No podes bajar menos a 0</p>,
                onOpen: () => {
                    setTimeout(() => MySwal.clickConfirm(), 1000);
                }
                });
        }
    }

    const addCart = () =>{
        onAdd(count)
        setCount(0)
    }
    const stockdispo = stock - count
    

    
    
    return (
    <div className='ocultar'>
        <div className='botones'>
        <button className='btn btn-primary' onClick={add}>Agregar item</button>
        <button className='btn btn-danger' onClick={decrement}>Eliminar Item</button>
        <button className='btn btn-secondary' onClick={addCart}>Agregar al carrito</button>
        </div>

        <h2>Cantidad a comprar {count}</h2>
        <h5>Stock Disponible {stockdispo}</h5>
        
    </div>
  )
}

export default ItemCount