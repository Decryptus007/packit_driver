import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Signin.css'

import packitLogo from '../../../assets/images/favicon.png'
import nairaHand from '../../../assets/images/naira hand 1.png'

export default function Signin() {

    const navigate = useNavigate()

    return (
        <div className="Signin">
            <div className="signInOne">
                <img src={nairaHand} alt="packit" />
                <h1>Earn more while you do less</h1>
            </div>
            <div className="signInTwo">
                <h2>Log In</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <img src={packitLogo} alt="Packit" />
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-at" />
                        <input placeholder="Email" type={"email"} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                        <input placeholder="Password" type={"password"} />
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <small>Forgot Password?</small>
                <p>You don't have an account? <span onClick={() => navigate('/signup')}>Create an account here</span></p>
            </div>
        </div>
    )
} 