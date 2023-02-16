import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>e-fundraiser</NavLink>
        <NavLink to='raisefunds'>raise funds</NavLink>
        <NavLink to='testimonies'>testimonies</NavLink>
    </nav>
  )
}

export default Navbar