import React from 'react'
import CardPizza from './CardPizza'
import { pizzas } from '../utils/pizzas'


const Cart = ({cart, eliminarDelCart, aumentarDelCart, disminuirDelCart}) => {

    const totalGeneral = cart.reduce((acc, pizza) => acc + pizza.precio + pizza.cant, 0)

  return (
    <div className='cart'>
        <h2>Carrito de compra</h2>
        {cart.length === 0 ? ( 
          <p>El carrito esta vacio</p> 
        ) : (
          cart.map((pizza) => (
            <div key={pizza.id} className='cart-item'>
                <img src='pizza.img' alt={pizza.nombre}/>
                <h3>{pizza.name}</h3>
                <p>{pizza.price}</p>
                <p>Cantidad: {pizza.cant}</p>
                <button onClick={() => disminuirDelCart}> - </button>
                <button onClick={() => aumentarDelCart}> + </button>
                <button onClick={() => eliminarDelCart}>Eliminar</button>
                <p>Total: ${pizza.price * pizza.cant}</p>
            </div>
            ))
        )}
        <h3>Total a pagar: ${totalGeneral.toFixed(3)}</h3>
    </div>
  
  )
}

export default Cart
