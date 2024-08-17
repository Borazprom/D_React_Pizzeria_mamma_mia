import React, { useState } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../utils/pizzas'

const Home = () => {

  return (
    <div>
      <Header  title="¡Pizzeria Mamma Mía!" 
               description="¡Tenemos las mejores pizzas que podras encontrar!"/>
        <div className='container'>
            <div className='row' >
                {pizzas.map(pizza =>(
                    <CardPizza className="col sm-3"
                    key={pizza.id}
                    description={pizza.desc}
                    img={pizza.img}
                    ingredients={pizza.ingredients}
                    name={pizza.name}
                    price={pizza.price}
                    />
                 ))}
            </div>
        </div>
    </div>

  )
}

export default Home