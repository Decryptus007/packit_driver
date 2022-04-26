import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Signup.css'

import packitLogo from '../../../assets/images/pack it.png'
import truck from '../../../assets/images/signOutImg.png'

export default function Signup() {

    const navigate = useNavigate()

    return (
        <div className="Signup">
            <div className="signUpOne">
                <img src={truck} alt="packit" />
                <h1>Can you deliver goods and packages?</h1>
            </div>
            <div className="signUpTwo">
                <h2>Sign Up</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <img src={packitLogo} alt="Packit" />
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-person" />
                        <input placeholder="First Name" type={"text"} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-person" />
                        <input placeholder="Last Name" type={"text"} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-phone" />
                        <input placeholder="Phone No" type={"tel"} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-at" />
                        <input placeholder="Email" type={"email"} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                        <input placeholder="Password" type={"password"} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                        <input placeholder="Confirm password" type={"password"} />
                    </div>
                    <button type="submit" onClick={() => console.log('Next')}>Continue Registration</button>
                </form>
                <p>You already have an account? <span onClick={() => navigate('/')}>Login here</span></p>
            </div>
        </div>
    )
}