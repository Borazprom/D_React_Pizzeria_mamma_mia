import React from 'react'
import { Button, CardFooter } from 'react-bootstrap'
import Card  from 'react-bootstrap/Card'
import { number } from '../utils/number'


const CardPizza = ({key, description, img, ingredients, name, price}) => {
  return (
    <>
      <Card style={{ width: '500px', marginTop:'16px' }} className="card">
            <Card.Img variant="top" src={img} className="img"/>
            <Card.Body>
                <Card.Title className="name">{name}</Card.Title>
                <Card.Text className='description'>{description}</Card.Text>
                <Card.Text className="subIngredientes">Ingredientes:</Card.Text>
                <Card.Text className="ingredients">🍕{ingredients}</Card.Text>
                <Card.Text className='price'>Precio: ${number(price)}</Card.Text>                 
            </Card.Body>
            <CardFooter className='cardFooter'>
            <Button  variant="outline-success">Ver mas</Button>
            <Button variant="success">Añadir</Button>
            </CardFooter>
        </Card>
    </>
  )
}

export default CardPizza