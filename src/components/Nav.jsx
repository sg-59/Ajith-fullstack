import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav'>
    
         <Link to={'/'}><li>Home</li></Link> 
            <li>contact</li>
            <li>profile</li>
         <Link to={'/cartpage'}><li>cart</li></Link>  
            <li>logot</li>
        
    </div>
  )
}

export default Nav