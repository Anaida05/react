import React from 'react'
import "./Styles/Navbar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const router = useNavigate()
    const redirectToCounter =()=>{
        router("/counter")
    }
  return (
    <nav className='nav-container'>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about" className={({isActive})=>(isActive ? "active-link" : "")}>About Us</NavLink>
        <p onClick={redirectToCounter}>Counter</p>
        <Link to="/home" className="logo">My Post</Link>
    </nav>
  )
}

export default Navbar