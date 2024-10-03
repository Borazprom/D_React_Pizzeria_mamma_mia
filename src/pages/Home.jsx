import React, { useContext } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { ApiContext } from '../context/ApiContext'


const Home = () => {

    const {pizzas} = useContext(ApiContext)

  return (
    <div>
        <div className='header'>  
            <Header title="¡Pizzeria Mamma Mía!" 
                    description="¡Las mejores pizzas pal bajón!"/>    
        </div>
        <div className='pizzas'>
            {pizzas.map(pizza =>(
            <CardPizza
            key={pizza.id}
            pizza={pizza}
            />
        ))}
        </div>
    </div>

  )
}

export default Home