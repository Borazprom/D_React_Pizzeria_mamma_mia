import './App.css'
import './index.css'
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
import CartProvider from './context/CartContext';
import ApiProvider from './context/ApiContext';


function App() {

  return (
    <>
     <ApiProvider>
      <CartProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/pizza/:id' element={<Pizza/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </CartProvider>
     </ApiProvider>
      <Footer/>
    </>
  )
}

export default App
