import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

const Cart = () => {

    const {cart, eliminarDelCart, aumentarPizza, disminuirPizza, total} = useContext(CartContext)
    const {user} = useContext(UserContext)

  return (
    <div className='cart'>
        <div className='titleCart'>
            <h2>Carrito de compra</h2>
        </div>
        <div className='cartItems'>
        {cart.length === 0 ? ( 
            <p> 🛒 El carrito esta vacio</p> 
        ) : (
            cart.map((pizza) => (
                <div key={pizza.id} className='cartItem'>
                <img width='100px' src={pizza.img} alt={pizza.name}/>
                <h3 className='namePizzaCart'>{pizza.name}</h3>
                <p>${pizza.price}</p>
                <p>Cantidad: {pizza.cant}</p>
                <button className='buttonCart' onClick={() => disminuirPizza(pizza)}> - </button>
                <button className='buttonCart' onClick={() => aumentarPizza(pizza)}> + </button>
                <button className='buttonCart' onClick={() => eliminarDelCart(pizza.id)}>Eliminar</button>
                <p>Total: ${pizza.price * pizza.cant}</p>
                {user ? ( <button> Pagar </button> ) : ( null )}
                
            </div>
            ))
        )}
        </div>
        <h3>Total a pagar: ${total}</h3>
    </div>
  )
}

export default Cart
