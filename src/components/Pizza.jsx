import React, { useEffect, useState,} from 'react'
import { Button } from 'react-bootstrap'

const Pizza = () => {

    const [pizza, setPizza] = useState([])

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

        <div className="card" style={{width: '600px', height: '100%'}}>
            <img src={pizza.img} className="card-img-top"  alt={pizza.name}/>
            <div className="card-body">
              <h5 className="card-title" style={{fontSize: '40px'}}>{pizza.name}</h5>
              <p className="card-text" >{pizza.desc}</p>
              <p className="card-text" style={{textAlign: 'center'}}>{pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}</p>
              <p className="card-text" style={{fontSize: '30px'}}>{pizza.price}</p>
              <Button onClick={() => agregarPizza(pizza)}  variant="success">Añadir</Button>
            </div>
        </div>

  )
}

export default Pizza
