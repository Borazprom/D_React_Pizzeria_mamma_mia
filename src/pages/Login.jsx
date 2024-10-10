import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Login = () => {
    const {handleSubmit, setEmail, setPassword} = useContext(UserContext)

// const [email, setEmail] = useState('')
// const [contraseña, setContraseña] = useState('')

const [errorLogin, setErrorLogin] = useState(false)

const [exitoLogin, setExitoLogin] = useState(false)


const validarLogin = (e) => {
    e.preventDefault()

    if (email === '' || contraseña === '')
    { setErrorLogin(true)
        setExitoLogin(false)
        return 
    }
    setErrorLogin(false)
    setExitoLogin(true)
    setEmail('')
    setPassword('')

}
  return (
    <div className='mainLogin' onSubmit={validarLogin}>
      <form className="formulario">
        <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            name="email"
            className="form-control"
            placeholder='Ingrese su Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>
        <div className="form-group">
            <label>Contraseña</label>
            <input
            minLength={6}
            type="password"
            name="contraseña"
            className="form-control"
            placeholder='Ingrese su contraseña'
            onChange={(e) => setPassword(e.target.value)}
            value={contraseña}
            />
        </div>
        {errorLogin ? <p className='errorLogin'>Todos los campos son obligatorios</p> : null}
        {exitoLogin ? <p className='exitoLogin'>Ha ingresado con exito</p> : null}
        <button type='submit' className='btn btn-success m-3'>Enviar</button>
      </form>

      <p>No tienes una cuenta <Link to='/register'>Registrate</Link></p>
    </div>
  )
}

export default Login
