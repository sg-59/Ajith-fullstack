import React, { useEffect, useRef } from 'react'

function Hey() {

  const a=useRef()
  const b=useRef()
  const c=useRef()
  const d=useRef()

console.log("componrnt re- rendered");

function display(){
var name=a.current.value
var age=b.current.value
var email=c.current.value
var password=d.current.value

console.log(name,age,email,password);

}


  return (
    <div>
<input ref={a} type="text" placeholder='name' />
<input ref={b} type="text" placeholder='age' />
<input ref={c} type="email" placeholder='email' />
<input ref={d} type="password" placeholder='password' />
<button onClick={display}>submit</button>
    </div>
  )
}

export default Hey
