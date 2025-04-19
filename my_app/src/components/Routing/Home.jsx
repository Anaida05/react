import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../Styles/Post.css"

// routing example
const Home = () => {
   useEffect(()=>{console.log("Anaidda")})
  return (
    <div>
        <h1>Home</h1>
        <div className='home-container'>
            <Link className='container-link' to={"/home/dashboard"}>Dashbord</Link>
            <Link className='container-link' to={"/home/about"}>About</Link>
            <Outlet/> {/* usefull to show the content of the child component */}
        </div>

        <h2>Blog Post</h2>
        <div className="post-links"> 
            <Link to={"/home/post/tech/1"}>Post 1</Link>
            <Link to={"/home/post/sport/2"}>Post 2</Link>
            <Link to={"/home/post/fashion/3"}>Post 3</Link>
        </div>
    </div>
  )
}

export default Home