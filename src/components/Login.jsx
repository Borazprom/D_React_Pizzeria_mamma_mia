import React from 'react'
import { useState } from 'react'

const Login = () => {

const [email, setEmail] = useState('')
const [contraseña, setContraseña] = useState('')

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
    setContraseña('')

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
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
            />
        </div>
        {errorLogin ? <p>Todos los campos son obligatorios</p> : null}
        {exitoLogin ? <p>Ha ingresado con exito</p> : null}
        <button type='submit' className='btn btn-success m-3'>Enviar</button>
      </form>
    </div>
  )
}

export default Login
