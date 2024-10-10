import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

const Register = () => {
    

    const { register } = useContext(UserContext);

// Estados de los input
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [repeatPassword, setRepeatPassword] = useState('')
// const {user } = useContext(UserContext)

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await register(email, password);
        // Redirigir o mostrar un mensaje de éxito
    } catch (error) {
        console.error(error.message);
    }
};


// Estados de los errores
const [error, setError] = useState(false)
const [errorLength, setErrorLength] = useState(false)
const [validPassword, setValidPassword] = useState(false)

// Estados de los exitos 
const [validar, setValidar] = useState(false)

const validarIngreso = (e) => {
    e.preventDefault()

    if(email === '' || password === '' || repeatPassword === ''){
        setError(true)

        return
    }else {
        setError(false)
    }
    if (validPassword !== password){
        setValidPassword(true)
        return
    }else{
        setValidPassword(false)
    } 

    if(email && password && repeatPassword){
        setValidar(true)
        setEmail('')
        setPassword('')
        setRepeatPassword('')
    }else {
        setValidar(false)
    }
}
  return (
    <>
    <div className='mainFormulario ' >

    <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>

      <h5>Formulario</h5>
        <form className="form m-5 p-5"  onSubmit={handleSubmit}>
            <div className="form-group mb-3" >
                <input type="text" 
                name="email" 
                className="form-control " 
                placeholder="TuEmail@ejemplo.com"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </div>
            <div className="form-group mb-3">
                <input type="password"
                minLength="6" 
                name="password" 
                className="form-control" 
                placeholder="Contraseña"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                name="repeatPassword" 
                className="form-control" 
                placeholder="Confirmar tu contraseña"
                required
                onChange={(e) => setRepeatPassword(e.target.value)}
                value={repeatPassword}/>
            </div>
            {validPassword ? <p className='validPassword'>Las contraseñas no coinciden</p> : null}
            <button type="submit" className="btn btn-success ">Registrar</button>
            {error ? <p className='error'>Debe completar todos los campos</p> : null}
            {validar ? <p className='validar'>Los campos fueron ingresado con exito</p> : null}
            {errorLength ? <p className='errorLength'>La contraseña debe tener minimo 6 caracteres</p> : null}
            
        </form>
        <p>Ya tienes una cuenta asociada<Link to='/login'>Iniciar sesion</Link></p>
    </div>
    </>
  )
}

export default Register


////Codigo chat gpt

// import React, { useState } from 'react';
// import { useUserContext } from './UserContext';

// const Register = () => {
    // const { register } = useUserContext();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await register(email, password);
    //         // Redirigir o mostrar un mensaje de éxito
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default Register;
