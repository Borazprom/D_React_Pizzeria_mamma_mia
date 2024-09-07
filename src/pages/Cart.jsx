import React from 'react'

const Cart = ({cart, eliminarDelCart, aumentarDelCart, disminuirDelCart}) => {

    const totalGeneral = cart.reduce((acc, pizza) => acc + pizza.price * pizza.cant, 0)

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
                <button className='buttonCart' onClick={() => disminuirDelCart(pizza)}> - </button>
                <button className='buttonCart' onClick={() => aumentarDelCart(pizza)}> + </button>
                <button className='buttonCart' onClick={() => eliminarDelCart(pizza.id)}>Eliminar</button>
                <p>Total: ${pizza.price * pizza.cant}</p>
            </div>
            ))
        )}
        </div>
        <h3>Total a pagar: ${totalGeneral}</h3>
    </div>
  )
}

export default Cart
