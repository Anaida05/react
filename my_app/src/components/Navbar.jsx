import React from "react";
import "./Styles/Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const router = useNavigate();
  // const redirectToCounter =()=>{
  //     router("/counter");
  // }

  const redirectToCountDown = () => {
    router("/countdown");
  };

  return (
    <nav className="nav-container">
      <NavLink to="/home">Home</NavLink>
      <NavLink
        to="/home/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        About Us
      </NavLink>
      <p onClick={redirectToCountDown}>CountDown</p>
      <Link style={{textDecoration:"none", color:"black"}} to={"/stop"}>StopWatch</Link>
    </nav>
  );
};

export default Navbar;
