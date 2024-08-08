import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <div>
      <Header  title="¡Pizzeria Mamma Mía!" 
               description="¡Tenemos las mejores pizzas que podras encontrar!"/>
        <div className='cards' >
            
            <CardPizza
                name="Española"
                price={12000}
                ingredients={["Queso parmesano, Tomate, Aceituna, Champiñon"]}
                image= "/src/assets/img/1.png"
            />  
            <CardPizza
                name="Mediterranea"
                price={12500}
                ingredients={["Carne, Pepinillo, Merken"]}
                image= "/src/assets/img/2.png"
            />  
            <CardPizza
                name="Vegetariana"
                price={10800}
                ingredients={["Tomate, Zapallo Italiano, Champiñon, Morron"]}
                image= "/src/assets/img/3.png"
            />       
        </div>
    </div>

  )
}

export default Home