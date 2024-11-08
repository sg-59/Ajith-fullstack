import { Link } from 'react-router-dom'
import './nav.css'
function Navbar(){
    return(
        <div className="navbar">
         <a href="/"><h3>Home</h3></a>  
            <h3>Contact</h3>
            <h3>About</h3>
          <Link to={'/cartpage'}><h3>Cart</h3></Link> 
            <h3>Logout</h3>
        </div>
    )
}

export default Navbar