import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1 className='mb-4'>La ruta que intentas consultar no existe</h1>
      <Link to="/">Volver al Inicio</Link>
    </div>
  )
}

export default NotFound
