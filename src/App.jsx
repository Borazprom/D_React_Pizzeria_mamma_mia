import './App.css'
import './index.css'
import { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Pizza from './pages/Pizza';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

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
      <Routes>
        <Route path='/' element={<Home agregarPizza={agregarPizza}/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart cart = {cart}
            eliminarDelCart={eliminarDelCart}
            aumentarDelCart={aumentarDelCart}
            disminuirDelCart={disminuirDelCart}/>} />
        <Route path='/pizza/:id' element={<Pizza/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
