import React from 'react'
import { useState } from 'react'
import './App.css'
const App=()=>{
  const [data,setData]=useState({
    name:'',
    email:'',
    password:''
  })
  const [currState,setCurrState]=useState('Login')
  const onLogin = (event)=>{
       event.preventDefault();
  }
  const onChangeHandler = (event)=>{
     const name=event.target.name;
     const value= event.target.value;
     setData((data)=>({...data,[name]:value}))
  }
  return (
    <div className='App'>
       <form onSubmit={onLogin}>
        <div className="login-heading">
        <h1>{currState}</h1>
        </div>
        <div className="login-input">
          {currState==='Login'?<></>:<input placeholder='Name' type='text' name='name' value={data.name} onChange={onChangeHandler}></input>}
        <input placeholder='Email' name='email' type="text" value={data.email} onChange={onChangeHandler} />
        <input placeholder='Password' name='password' type="password" value={data.password} onChange={onChangeHandler} />
        </div>
        <button type='submit'>{currState==='Sign Up'?"Create account":"Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
          {currState==='Login'?
          <p>Create a new account?<span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>
          : <p>Already have an account?<span onClick={()=>setCurrState('Login')}>Login here</span></p>
          }
     
       </form>
    </div>
  )
}
export default App