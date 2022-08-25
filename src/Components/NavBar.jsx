import React from 'react'
import "./Estilos.css";
import {FaBars, FaTimes} from "react-icons/fa";
import CartWidget from './CartWidget/CartWidget';

function NavBar() {
    return (
    <header className='header'>
        <h2 className='header__logo'>Linaje</h2>
        <div className='listaContainer'>
            <ul className='listaContainer_ul'>
                
                <li className='listaContainer_ul_li'><a className='listaContainer-ul_li_a' href="/#">Inicio</a></li>
                <li className='listaContainer_ul_li'><a className='listaContainer-ul_li_a' href="/#">Novedades</a></li>
                <li className='listaContainer_ul_li'><a className='listaContainer-ul_li_a' href="/#">Productos</a></li>
                <li className='listaContainer_ul_li'><a className='listaContainer-ul_li_a' href="/#">Lugares</a></li>
            </ul>
            <button className='boton'>
                    <FaTimes/>
                </button>
        </div>
            <div className='carritoDeCompras'>
                <CartWidget/>   
            </div>
            <button className='boton'>
                <FaBars/>
            </button>
    </header>
            )
}

export default NavBar