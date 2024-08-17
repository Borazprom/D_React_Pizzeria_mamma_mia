import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/cart';
// import Register from './components/Register';
// import Login from './components/Login';
function App() {

  return (
    <>
      <Navbar/>
      <Cart/>
      <Home/>
      {/* <Register/> */}
      {/* <Login/> */}
      <Footer/>
    </>
  )
}

export default App
