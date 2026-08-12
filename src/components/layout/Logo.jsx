import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Logo = ({ className }) => {
  return (
    <>
      <Link to="/" className={`${className}`} aria-label="EduKids home" >
        <img
          src={logo}
          alt="Edukids"
          className='w-full h-full object-contain'
        />
      </Link>
    </>
  )
}

export default Logo