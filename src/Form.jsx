import React, { useState } from 'react'
import Login from './Login'
import Reg from './Reg'

const Form = () => {
  const [login,setLogin]=useState(true)
  // const handleLogin=()=>{
  //   setLogin(!login)
  // }
  return (
    <div className='container'>
      <div className='forms'>
        <div className='left'>
          {
            login? <Login/>:<Reg/>
          }
          
        </div>
        <div className='right'>
          <h1>Hello Friend!</h1>
          <button className='buttonr' onClick={()=>setLogin(!login)}>{login?"Sign Up":"Login"}</button>
        </div>
      </div>
    </div>
  )
}

export default Form
