import React from 'react'
import "./Estilos.css"
import { TiSocialFacebook,TiSocialTwitter,TiSocialInstagram } from 'react-icons/ti';


const Footer = () => {
  return (
    <>
    <div className='footer'>
        <ul className='wrapper'>
            <li className='icon facebook'>
                <span className='tooltip'>Facebook</span>
                <span><TiSocialFacebook/></span>
            </li>
            <li className='icon twitter'>
                <span className='tooltip'>Twitter</span>
                <span><TiSocialTwitter/></span>
            </li>
            <li className='icon instagram'>
                <span className='tooltip'>Instagram</span>
                <span><TiSocialInstagram/></span>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Footer