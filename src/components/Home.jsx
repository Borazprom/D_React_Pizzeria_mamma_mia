import React, { useEffect, useState,} from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
// import { pizzas } from '../utils/pizzas'


const Home = ({agregarPizza}) => {

    const [pizzas, setPizzas] = useState([])

    const info = async()=> {
        const result = await fetch("http://localhost:5000/api/pizzas")
        const data = await result.json()
        setPizzas(data)
    } 

    useEffect(() => {
        info()
    },[])


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