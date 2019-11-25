import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pies">Pies</Link>
        </li>
        <li>
          <Link to="/cookies">Cookies</Link>
        </li>
        <li>
          <Link to="/cakes">Cakes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
