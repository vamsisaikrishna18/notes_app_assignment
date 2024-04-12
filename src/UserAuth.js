import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import "./loginform.css"
const UserAuth = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const {email,password} = data;
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then(user=>console.log(user)).catch(err=>console.log(err))
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then(user=>console.log(user)).catch(err=>console.log(err))
    }
  return (
    <div>
        <center>
            <form autoComplete='off'>
                <h1>Login</h1>
                <input type="email" placeholder="Email" name='email' value={email} onChange={handleChange}/><br /><br />
                <input type="password" placeholder="Password" name='password' value={password}onChange={handleChange}/><br /><br />
                <button type="submit" onClick={handleSignIn} className='login-btn'>Login</button> &nbsp;&nbsp;
                <button type="submit" onClick={handleSignUp} className='signup-btn'>SignUp</button>
            </form>
        </center>
    </div>
  )
}

export default UserAuth