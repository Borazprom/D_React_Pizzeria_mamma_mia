import React from 'react'

const Register = () => {
  return (
    <>
    <div className='mainFormulario'>
      <h5>Formulario</h5>
        <form className="formulario">
            <div className="form-group mb-3">
                <input type="email" 
                name="email" 
                className="form-control" 
                placeholder="tuemail@ejemplo.com"/>
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                name="password" 
                className="form-control" 
                placeholder="Contraseña"/>
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                name="confirmacion" 
                className="form-control" 
                placeholder="Confirmar tu contraseña"/>
            </div>
            <button type="submit" className="btn btn-success ">Ingresar</button>
        </form>
    </div>
    </>
  )
}

export default Register
