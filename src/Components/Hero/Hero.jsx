import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Estilos.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BsCreditCard2Back } from 'react-icons/bs';
import { FaMoneyBillAlt,FaCcPaypal,FaPlane } from 'react-icons/fa';
import { MdChangeCircle} from 'react-icons/md';



const Hero = () => {
    const navigate = useNavigate()
    const Ir = () =>{
        navigate("/items")
    }
  return (
    <>
    <div>
<div class="p-3 text-center bg-image rounded-3">
  <div class="mask">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="text-white">
        <h1 class="mb-3">Tu necesidades, nuestro legado</h1>
        <h4 class="mb-3">Encontra los mejores productos del mercado al mejor precio del mercado.</h4>
        <button className='btn btn-dark' onClick={Ir}>Ir a la tienda</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <div>
    <CardGroup className='p-3 '>
      <Card className='card text-dark'>
        <Card.Body>
          <Card.Title> <h2>Formas de pago </h2>
          <h3><BsCreditCard2Back/>,<FaMoneyBillAlt/>,<FaCcPaypal/></h3></Card.Title>
          <Card.Text>
          <h5>Recibimos todas las formas de pago.</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card text-dark'>
        <Card.Body>
          <Card.Title>
            <h2>
            Envio a todo el pais.
            </h2>
            <h><FaPlane/></h>
          </Card.Title>  
          <Card.Text>
          <h5>Envio sin cargo a todo el pais.</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card text-dark'>

        <Card.Body>
          <Card.Title>
            <h2>
            Garantia por 30 dias
            </h2>
            <h4><MdChangeCircle/></h4>
            </Card.Title>
          <Card.Text>
          <h5>Si su producto llega con algun problema o tiene algun problema durante los primeros 30 dias, se realizara el cambio en forma directa o se reintegrara su dinero.</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
      </>
  )
}

export default Hero