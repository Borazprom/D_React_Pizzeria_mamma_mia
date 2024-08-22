import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/cart';
import { useState } from 'react';
// import Register from './components/Register';
// import Login from './components/Login';
function App() {

// Estado para mostrar una pagina
const [show, setShow] = useState(true)

// Estado para verificar si un producto esta en el cat, sino para agregarlo
const [cart, setCart] = useState([])

// Funcion para agregar
const agregarCart = (pizza) => {
    const itemCart = cart.find(item => item.id === pizza.id)  
    if (itemCart){
        setCart(cart.map(item => (
            item.id === pizza.id ? {...item, cant: item.cant + 1 } : item
        )))
    }else {
        setCart([...cart, {...pizza, cant:1}])
    }
}


// Variables de su estado
const showHome = ()=>{
    setShow(false)
}
const showCart = ()=>{
    setShow(true)
}


  return (
    <>
        <Navbar/>
    {
        show ? (
        <Home showHome={showHome}
              agregarCart={agregarCart}/>) 
        : (
        <Cart showCart={showCart}
              cart={cart}
              agregarCart={agregarCart}/>    
         )
    }

      {/* <Cart/>
      <Home/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      <Footer/>
    </>
  )
}

export default App
