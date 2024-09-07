import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1 className='textoNotFound'>¡ERROR 404!</h1>
      <h3><Link to="/">Vuelve por tu pizza</Link></h3>
      
    </div>
  )
}

export default NotFound
