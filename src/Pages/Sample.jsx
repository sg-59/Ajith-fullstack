import React, { useState } from 'react'


function Sample() {

const [name,setName]=useState()
const [email,setEmail]=useState()
const [password,setPassword]=useState()


function display(){
  console.log(name,email,password);
}


  return (
    <>
<input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
<input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={display}>Submit</button>

    </>
  )
}

export default Sample
