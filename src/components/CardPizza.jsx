import React, { useContext } from 'react'
import { Button, CardFooter } from 'react-bootstrap'
import Card  from 'react-bootstrap/Card'
import { number } from '../utils/number'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const CardPizza = ({pizza}) => {
    const { agregarPizza } = useContext(CartContext)
  return (
    <>
      <Card key={pizza.id} style={{ width: '500px', marginTop:'16px' }} className="card">
            <Card.Img variant="top" src={pizza.img} className="img"/>
            <Card.Body>
                <Card.Title className="name">{pizza.name}</Card.Title>
                <Card.Text className='description'>{pizza.desc}</Card.Text>
                <Card.Text className="subIngredientes">🍕 Ingredientes:</Card.Text>
                <Card.Text className="ingredients">
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </Card.Text>
                <Card.Text className='price'>Precio: ${number(pizza.price)}</Card.Text>                 
            </Card.Body>
            <CardFooter className='cardFooter'>
            <Button variant="outline-dark" ><Link to="/pizza">Ver mas</Link></Button>
            <Button onClick={() => agregarPizza(pizza)}  variant="success">Añadir</Button>
            </CardFooter>
        </Card>
    </>
  )
}

export default CardPizza