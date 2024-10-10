import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
    // const email = "felipeBorbaran@gmail.cl"
    const {validar, user} = useContext(UserContext)

    useEffect(() => {
        validar()
    }, [validar] )
    
  return (
    <div>
        <h2>{email}</h2>
      <button>Cerrar sesión</button>
    </div>
  )
}

export default Profile
