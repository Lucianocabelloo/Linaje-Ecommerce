import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/config";


export const algoritmoGuardadoAutomático = async () => {

    try {
        
        const response = await fetch('/mocks/data.json')
        const productosAGuardar = await response.json()
    
        //
        productosAGuardar.forEach(async (producto) => {
            const docRef = await addDoc(collection(db, "products"), {
                title: producto.title,
                price: producto.price,
                description: producto.description,
                category: producto.category,
                image: producto.image,
                stock: 15,
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default algoritmoGuardadoAutomático;