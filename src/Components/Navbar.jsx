import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
    <Link style={{textDecoration:'none',color:'black'}} to={'/'}><h3>Home</h3></Link> 
   <Link  style={{textDecoration:'none',color:'black'}} to={'/cartpage'}><h3>cart</h3></Link>  
    <a href="/"> <h3>Home in a tag</h3></a> 
    <a href="/cartpage"><h3>Cart in a tag</h3></a> 
      <h3>Logout</h3>
    </div>
  )
}

export default Navbar
