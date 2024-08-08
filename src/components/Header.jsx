import React from 'react'



const Header = ({title, description}) => {
  return (
    <div className='header'>
        <div className='textHeader'>
        <h1 style={{fontSize:'80px'}}>{title}</h1>
        <p style={{fontSize:'30px'}}>{description}</p>
        </div>
    </div>
  )
}

export default Header