import React, { useContext, useEffect, useState,} from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { useParams } from 'react-router-dom'

const Pizza = () => {

    const [pizza, setPizza] = useState([])
    const {id} = useParams()
    const { agregarPizza } = useContext(CartContext)

    // const url = import.meta.env.VITE_URL_ID
    const url = `http://localhost:5000/api/pizzas/${id}`;
    const getData = async()=> {
        const response = await fetch(url)
        const data = await response.json()
        setPizza(data)
    } 
    
    useEffect(() => {
        getData()
    },[])
    
  return (
    <>
        
            <div className="containerPizza" >
                <img src={pizza.img} className="imagenPizza"   alt={pizza.name}/>
                <div className="bodyPizza">
                  <h5 className="namePizza" >{pizza.name}</h5>
                  <p className="textPizza" >{pizza.desc}</p>
                  {/* <p className="card-text">{pizza.ingredients}</p> */}
                  <p className="pricePizza" >${pizza.price}</p>
                  <Button onClick={() => agregarPizza(pizza)}  variant="success" >Añadir</Button>
                </div>
             </div> 
    </>
  )
}

export default Pizza
