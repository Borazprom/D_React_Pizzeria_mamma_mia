import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { useState } from 'react';
import { pizzas } from './utils/pizzas';
import Pizza from './components/Pizza';

// import Register from './components/Register';
// import Login from './components/Login';
function App() {


// Estado para verificar si un producto esta en el cat, sino para agregarlo
const [cart, setCart] = useState([])

// Funcion para agregar al carrito
const agregarPizza = (pizza) => {
    const itemEnCart = cart.find(item => item.id === pizza.id)  
    if (itemEnCart){
        setCart(cart.map(item => 
            item.id === pizza.id ? {...item, cant: item.cant + 1 } : item
        ))
    }else {
        setCart([...cart, {...pizza, cant:1}])
    }
}
//Funcion eliminar del carrito
    const eliminarDelCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const aumentarDelCart = (pizza) => {
        setCart(
            cart.map(item => item.id === pizza.id ?
            {...item, cant: item.cant + 1 } : item
            )
        )
    }

    const disminuirDelCart = (pizza) => {
        if (pizza.cant === 1) {
            eliminarDelCart(pizza.id)
        }else {
            setCart(
                cart.map(item => item.id === pizza.id ?
                    {...item, cant: item.cant - 1} : item
                )
            )
        }
    }

  return (
    <>
      <Navbar/>
      <Home agregarPizza={agregarPizza}/>
      <Cart cart = {cart}
            eliminarDelCart={eliminarDelCart}
            aumentarDelCart={aumentarDelCart}
            disminuirDelCart={disminuirDelCart}/>
      {/* <Register/> */}
      {/* <Login/> */}
      <Pizza/>
      <Footer/>
    </>
  )
}

export default App
