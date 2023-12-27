import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loggedOut } from '../redux/actions/loggin';
export default Headers=()=>
{
    const dispatch=useDispatch()
    const response=useSelector((state)=>{state.logIn})
    const logOut=()=>{
        dispatch(loggedOut())
        console.log(response)
    }
    return(<>
        <div className='ui fixed menu'>
            <div className='ui container center'>
                <h2>Shop name</h2>
            </div>
            <div className='ui container right'>
            <Link to='/auth/login' style={{ fontSize:'2rem', margin:'1rem'  }}>Login</Link>
            <button onClick={logOut} style={{ margin:'1rem' }}>Log out</button>
            </div>
            
        </div>
    </>);
}