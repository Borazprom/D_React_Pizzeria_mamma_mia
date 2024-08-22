import React from 'react'
import { pizzas } from '../utils/pizzas'
import { Button } from 'react-bootstrap'

const Cart = ({showCart, cart}) => {
  return (
    <div>
      <Button onClick={showCart} style={{width:'300px', margin:'20px 45% 0 45%'}} variant="success">Ir a Home</Button>
    </div>
  )
}

export default Cart
