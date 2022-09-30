import React from 'react'
import "./Estilos.css";
import {FaBars, FaTimes} from "react-icons/fa";
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Shop } from './Context/CartContext';

function NavBar() {
    const {cart} = useContext(Shop)
    return (
    <header className='header'>
        <h2 className='header__logo'>Linaje</h2>
        <div className='listaContainer'>
            <ul className='listaContainer_ul'>
                <li className='listaContainer_ul_li'><Link className='listaContainer-ul_li_a' to='/'>Home</Link></li>

                <li className='listaContainer_ul_li'><Link className='listaContainer-ul_li_a' to='/category/electronics'>Electronics</Link></li>

                <li className='listaContainer_ul_li'><Link className='listaContainer-ul_li_a' to='/category/jewelery'>Jewelery</Link></li>

                <li className='listaContainer_ul_li'><Link className='listaContainer-ul_li_a' to="/category/women's clothing">Women's clothing</Link></li>
                
                <li className='listaContainer_ul_li'><Link className='listaContainer-ul_li_a' to="/category/men's clothing">Men's clothing</Link></li>

            </ul>
            <button className='boton'>
                    <FaTimes/>
                </button>
        </div>
        {cart.length ? <CartWidget /> : <></>}
            <div className='carritoDeCompras'>
            </div>
            <button className='boton'>
                <FaBars/>
            </button>
    </header>
            )
}

export default NavBar
