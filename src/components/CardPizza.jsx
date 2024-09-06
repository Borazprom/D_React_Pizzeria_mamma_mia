import React from 'react'
import { Button, CardFooter } from 'react-bootstrap'
import Card  from 'react-bootstrap/Card'
import { number } from '../utils/number'


const CardPizza = ({pizza, agregarPizza}) => {
  return (
    <>
      <Card style={{ width: '500px', marginTop:'16px' }} className="card">
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
            <Button  variant="outline-success">Ver mas</Button>
            <Button onClick={() => agregarPizza(pizza)}  variant="success">Añadir</Button>
            </CardFooter>
        </Card>
    </>
  )
}

export default CardPizza