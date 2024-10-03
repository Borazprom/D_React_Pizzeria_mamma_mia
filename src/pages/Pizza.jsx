import React, { useContext, useEffect, useState,} from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

const Pizza = () => {

    const [pizza, setPizza] = useState([])
    const { agregarPizza} = useContext(CartContext)

    const url = "http://localhost:5000/api/pizzas/p001"
    const getData = async()=> {
        const response = await fetch(url)
        const data = await response.json()
        setPizza(data)
    } 
    
    useEffect(() => {
        getData()
    },[])
    
  return (

        <div className="card" >
            <img src={pizza.img} className="card-img-top"  alt={pizza.name}/>
            <div className="card-body">
              <h5 className="card-title" >{pizza.name}</h5>
              <p className="card-text" >{pizza.desc}</p>
              <p className="card-text">{pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}</p>
              <p className="card-text" >${pizza.price}</p>
              <Button onClick={() => agregarPizza(pizza)}  variant="success" >Añadir</Button>
            </div>
        </div>

  )
}

export default Pizza
