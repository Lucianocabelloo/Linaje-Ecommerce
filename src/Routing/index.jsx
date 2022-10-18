import React from 'react'
import NavBar from "../Components/NavBar"
import ItemListContainer from "../Containers/ItemListContainer";
import ItemDetailContainer from "../Containers/ItemDetailContainer/ItemDetailContainer";
import NotFound from "../Components/NotFound/NotFound";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CartContainer from "../Containers/CartContainer/CartContainer";
import Formulario1 from "../Components/Formulario/Formulario1";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";

const Routing = () => {
    return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/items" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/Formulario" element={<Formulario1/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    ) 
}

export default Routing