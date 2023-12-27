import React from 'react'
export default function SignUp()
{
    return(<div className='container' style={{ padding:'7rem' }}>
        <h1>Sign up</h1>
        <form style={{ border:'solid .1rem black',width:'fit-content' }}>
        <input type='email' required style={{ margin:'1rem',padding:'.5rem' }} name='email' placeholder='email' />
          
            <input required style={{ margin:'1rem',padding:'.5rem' }} name='username' placeholder='username' />
           
            <input type='password' required  style={{ margin:'1rem',padding:'.5rem' }} name='password' placeholder='password'/>
          <br></br>
            <input required style={{ margin:'1rem',padding:'.5rem' }} name='first name' placeholder='first name' />
            <input required style={{ margin:'1rem',padding:'.5rem' }} name='second name' placeholder='second name' />
            <br></br>
            <input required style={{ margin:'1rem',padding:'.5rem' }} name='city' placeholder='city' />
            <input required style={{ margin:'1rem',padding:'.5rem' }} name='street' placeholder='street' />
            <input required style={{ margin:'1rem',padding:'.5rem' }} name='street number' placeholder='street number' />
            <input  required style={{ margin:'1rem',padding:'.5rem' }} name='zip code' placeholder='zip code' />
            <input type='number' required style={{ margin:'1rem',padding:'.5rem' }} name='phone number' placeholder='phone number'/>
            <br></br>
            <button style={{ margin:'1rem' }} type='sumbit'>submit</button>
            <br></br>
        </form>
    </div>);
}