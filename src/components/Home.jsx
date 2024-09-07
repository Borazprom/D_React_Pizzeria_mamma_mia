import React, { useState,} from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../utils/pizzas'


const Home = ({agregarPizza}) => {

    

  return (
    <div>
        <div className='header'>
            <Header  title="¡Pizzeria Mamma Mía!" 
                        description="¡Tenemos las mejores pizzas que podras encontrar!"/>
        </div>
        <div className='pizzas'>
            {pizzas.map(pizza =>(
            <CardPizza
            key={pizza.id}
            pizza={pizza}
            agregarPizza={agregarPizza}
            />
        ))}
        </div>
    </div>

  )
}

export default Home