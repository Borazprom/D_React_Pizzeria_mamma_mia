import React, { useState,} from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../utils/pizzas'
import { Button } from 'react-bootstrap'


const Home = ({showHome, agregarCart}) => {

  return (
    <div>
        <div className='header'>
            <Header  title="¡Pizzeria Mamma Mía!" 
                        description="¡Tenemos las mejores pizzas que podras encontrar!"/>
        </div>
        <Button onClick={showHome} style={{width:'300px', margin:'20px 45% 0 45%'}} variant="success">Ir al carrito</Button>
        <div className='pizzas'>
            {pizzas.map(pizza =>(
            <CardPizza
            key={pizza.id}
            description={pizza.desc}
            img={pizza.img}
            ingredients={pizza.ingredients}
            name={pizza.name}
            price={pizza.price}
            agregarCart={agregarCart}
            />
        ))}
        </div>
    </div>

  )
}

export default Home