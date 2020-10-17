import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"
import {auth } from "./firebase"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    

    const login = (event) => {
        event.preventDefault(); //stop refresh
        //do the login logic
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to homepage
                history.push("/");
            })
            .catch((error) => alert(error.message))

    }

    const register = (event) => {
        event.preventDefault(); //stop refresh
        //do the register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //create user and logged in
                history.push("/");
            })
            .catch((e) => alert(e.message))

    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    src="https://seeklogo.com/images/M/manchester-united-logo-F14DA1FCCD-seeklogo.com.png" 
                    alt="" 
                    className="login__logo"
                />
            </Link>

            {/* build form */}
            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button type="submit" onlick={login} className="login__signInButton">Sign in</button>
                </form>
                
                <p>
                    By signing-in you agree to the AMANUTDZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. alo  
                </p>

                <button onlick={register} className="login__registerButton">Create your accout</button>

            </div>
        </div>
    )
}

export default Login
