import React from 'react'
import "./Estilos.css"
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({productoAMostrar}) => {

console.log(productoAMostrar)
    const agregarAlCarrito = (cantidad) =>{
        console.log(`Se Agrego ${cantidad} al carrito`)
    }
    return(
<>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='img' variant="top" src="https://www.sinergiaindustrial.com.ar/images/146C645C28B442F3B32FBF41C0D331D5.jpg" />
                <Card.Body>
            <Card.Title>{productoAMostrar}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
                </Card.Body>
                <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
        </Card>
        </>
)
}

export default Item;