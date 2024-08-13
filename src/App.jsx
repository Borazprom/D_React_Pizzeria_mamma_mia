import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Register/>
      <Footer/>
    </>
  )
}

export default App
