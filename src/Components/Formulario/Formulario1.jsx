import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Shop } from '../Context/CartContext'

import generarOrden from "../../Services/generarOrden";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./Estilos.css"

const Formulario1 = () => {
    const navigate = useNavigate()
    const {cart,total} = useContext(Shop)
    const {register,formState: {errors}, handleSubmit} = useForm()
    
    const onSubmit = async(data, e) =>{
        const importeTotal = total();
        const orden = generarOrden(data.Nombre,data.Email,data.Telefono,cart,importeTotal)

        const docRef = await addDoc(collection(db, "orders"), orden);

    cart.forEach(async (productoEnCarrito) => {
            //Primero accedemos a la referencia del producto
            const productRef = doc(db, "products", productoEnCarrito.id);
            //Llamamos al snapshot, llamando a firebase
            const productSnap = await getDoc(productRef);
            //En snapshot.data() nos devuelve la información del documento a actualizar
            await updateDoc(productRef, {
                stock: productSnap.data().stock - productoEnCarrito.quantity,
            });
        });
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <p>Felicidades, Su compra fue realizada</p>,
            text:`Gracias por su compra! Se generó la orden generada con ID: ${docRef.id}`,
            onOpen: () => {
                setTimeout(() => MySwal.clickConfirm(), 1000);
            }
            })
        navigate("/")
        e.target.reset()
    }
    


    return (
        <>
        <div className='formulario container mt-5'>
            <h1 >Formulario</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='card card-body'>
                    <div className='form-group'>
                        <div>
                            <input type="text" name="Nombre" className='form-control' placeholder='Ingresar Nombre' {...register("Nombre", {required: true})}  />
                            {errors.Nombre?.type === "required" && <h2>El nombre es Requerido</h2>}
                        </div>
        <div>
                            <input type="text" name="Direccion" className='form-control' placeholder='Ingresar Direccion' {...register("Direccion", {required: true})} />
                            {errors.Direccion?.type === "required" && <h2>La direccion es Requerida</h2>}
        </div>
        <div>
                            <input type="email" name="Email" id="" className='form-control' placeholder='Email' {...register("Email", {required: true})} />
                            {errors.Email?.type === "required" && <h2>El Email es Requerido</h2>}
        </div>
        <div>
                            <input type="phone" name="Telefono" id="" className='form-control' placeholder='Celular' {...register("Telefono", {required: true})} />
                            {errors.Telefono?.type === "required" && <h2>El Telefono es Requerido</h2>}
        </div>
        
                    </div>
                    <button className='btn btn-primary'>Realizar pedido</button>
                </div>
            </form>
        </div>
        </>
      )
      }


export default Formulario1