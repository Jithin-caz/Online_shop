import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from '../redux/actions/loggin';
export default function Login()
{
   const [username, setUsername]=useState('')
   const [password, setPassword]=useState('')
   const dispatch=useDispatch()
   const loginSuccess=useSelector((state)=>state.logIn)
    const handleLogin=async(e)=>
    {
        e.preventDefault();
        const response=await axios.post('https://fakestoreapi.com/auth/login',{username:username,password:password}).catch((err)=>console.log('login failed'))
        dispatch(loggedIn())
        console.log(loginSuccess)
        document.getElementById('success').innerHTML='Logged in successfully, return to your previous page'
    }
    return(<div className='container' style={{ padding:'7rem' }}>
        <h1>Login</h1>
        <form onSubmit={handleLogin} style={{ border:'solid .1rem black',width:'fit-content' }}>
            <input required style={{ margin:'1rem',padding:'.5rem' }} name='username' placeholder='username'
          value={username} onChange={(e)=>setUsername( e.target.value)} />
            <br></br>
            <input  required  style={{ margin:'1rem',padding:'.5rem' }} name='password' placeholder='password'
                 value={password} onChange={(e)=>setPassword( e.target.value)} 
            />
            <br></br>
            <button style={{ margin:'1rem' }} type='sumbit'>submit</button>
            <br></br>
            <div  style={{ margin:'1rem' }}>Dont have an account? <span><Link to='/SignUp'>sign up</Link></span></div>
        </form>
        <div id='success'></div>
    </div>);
}