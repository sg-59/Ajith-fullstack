import React from 'react'
import './hello.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function Hello() {
  return (
    <>
    <Navbar/>
    <div className='cart'>
      <h2> cart page</h2>
    </div>
    <Footer/>
    </>
  )
}

export default Hello
