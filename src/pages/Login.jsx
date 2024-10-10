import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Login = () => {
    // const {handleSubmit, email, setEmail, password, setPassword} = useContext(UserContext)

    const { login } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            // Redirigir o mostrar un mensaje de éxito
        } catch (error) {
            console.error(error.message);
        }
    };

// const [errorLogin, setErrorLogin] = useState(false)
// const [exitoLogin, setExitoLogin] = useState(false)


// const validarLogin = (e) => {
//     e.preventDefault()

//     if (email === '' || password === '')
//     { setErrorLogin(true)
//         setExitoLogin(false)
//         return 
//     }
//     setErrorLogin(false)
//     setExitoLogin(true)
//     setEmail('')
//     setPassword('')

// }
  return (
    
    <div className='mainLogin' onSubmit={handleSubmit}>

<form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>


      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            name="email"
            className="form-control"
            placeholder='Ingrese su Email'
            required
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
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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


//Codigo chat gpt
// import React, { useState } from 'react';
// import { UserContext } from './UserContext';

// const Login = () => {
//     const { login } = useContext(UserContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await login(email, password);
//             // Redirigir o mostrar un mensaje de éxito
//         } catch (error) {
//             console.error(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;
