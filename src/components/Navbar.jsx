import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="navLogo">
        <NavLink to='/'>e-fundraiser</NavLink>
        </div>
        <NavLink to='raisefunds'>raise funds</NavLink>
        <NavLink to='testimonies'>testimonies</NavLink>
        <NavLink to='resources'>reads</NavLink>
        <NavLink to='login'>login</NavLink>
    </nav>
  )
}

export default Navbar