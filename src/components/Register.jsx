import React, { useState } from 'react'

const Register = () => {
// Estados de los input
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [repeatPassword, setRepeatPassword] = useState('')

// Estados de los errores
const [error, setError] = useState(false)
// const [errorLength, setErrorLength] = useState(false)
const [validPassword, setValidPassword] = useState(false)

// Estados de los exitos 
const [validar, setValidar] = useState(false)

const errorLength = () => {
    password = password.length(6)
}

const validarIngreso = (e) => {
    e.preventDefault()

    if(email === '' || password === '' || repeatPassword === ''){
        setError(true)
        setValidar(false)
        setValidPassword(false)
        
        return
    }else {
        setError(false)
    }
    if (validPassword !== password){
        setValidPassword(true)
        return
    }else{
        setValidPassword(false)
    } if (nombre && email && password && repeatPassword){
        setValidar(true)
        setError(false)
        setValidPassword(false)
        setEmail('')
        setPassword('')
        setRepeatPassword('')
    }
}
  return (
    <>
    <div className='mainFormulario ' >
      <h5>Formulario</h5>
        <form className="form m-5 p-5"  onSubmit={validarIngreso}>
            <div className="form-group mb-3" >
                <input type="text" 
                name="email" 
                className="form-control " 
                placeholder="TuEmail@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </div>
            <div className="form-group mb-3">
                <input type="password"
                minLength="6" 
                name="password" 
                className="form-control" 
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                name="repeatPassword" 
                className="form-control" 
                placeholder="Confirmar tu contraseña"
                onChange={(e) => setRepeatPassword(e.target.value)}
                value={repeatPassword}/>
            </div>
            {validPassword ? <p className='validPassword'>Las contraseñas no coinciden</p> : null}
            <button type="submit" className="btn btn-success ">Ingresar</button>
            {error ? <p className='error'>Debe completar todos los campos</p> : null}
            {validar ? <p className='validar'>Los campos fueron ingresado con exito</p> : null}
            {errorLength ? <p className='errorLength'>La contraseña debe tener minimo 6 caracteres</p> : null}
            
        </form>
    </div>
    </>
  )
}

export default Register
