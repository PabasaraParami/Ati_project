import React from 'react'
import logo from '../assets/SLIATE.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="Navbar">
         <img src={logo} alt="" className="s-logo" width=" 50px" />
        <ul>
            <Link to={'/'}> <li>Home</li>  </Link>
            <Link to={'/vacancy'}> <li>Vacancy</li></Link>
            <Link to={'/contact'}><li>Contact</li></Link>
            
        </ul>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/apply"><button>Apply</button></Link>
        </div>
  )
}

export default Navbar