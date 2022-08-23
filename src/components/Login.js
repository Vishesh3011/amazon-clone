import React, { useState } from 'react';

import './css/login.css';

import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // firbase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)  => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    };

    const register = e => {
        e.preventDefault();
        // firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // creates a new user with email and password
                console.log(auth);
                if(auth){
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to = '/'>
            <img className='loginLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'/>
        </Link>
        <div className='loginContainer'>
            <h1>Sign-in</h1>
            
            <form>
                <h5>E-mail</h5>
                <input type = 'text' value = {email} onChange = {e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type = 'password' value = {password} onChange = {e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='loginSignInButton'>Sign In</button>
            </form>

            <p>
                By signing-in, you agree to Amazon's Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button type = "submit" onClick = {register} className='loginRegisterButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login