import React from 'react'
import "./Estilos.css";
import "./img/home.png"
import {FaBars, FaTimes} from "react-icons/fa";

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
            <button className='boton'>
                <FaBars/>
            </button>
    </header>
            )
}

export default NavBar