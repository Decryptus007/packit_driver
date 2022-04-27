import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import packitLogo from '../../../assets/images/pack it.png'
import truck from '../../../assets/images/signOutImg.png'

export default function FirstStage(props) {

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
                        <input value={props.fname} placeholder="First Name" type={"text"} onChange={(e) => props.setFname(e.target.value)} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-person" />
                        <input placeholder="Last Name" type={"text"} value={props.lname} onChange={(e) => props.setLname(e.target.value)} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-phone" />
                        <input placeholder="Phone No" type={"tel"} value={props.phone} onChange={(e) => props.setPhone(e.target.value)}/>
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-at" />
                        <input placeholder="Email" type={"email"} value={props.email} onChange={(e) => props.setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                        <input placeholder="Password" type={"password"} value={props.pwd} onChange={(e) => props.setPwd(e.target.value)}/>
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                        <input placeholder="Confirm password" type={"password"} value={props.cpwd} onChange={(e) => props.setCpwd(e.target.value)}/>
                    </div>
                    <button style={{width: "100%"}} type="submit" onClick={() => props.setNxtPg('stage2')}>Continue Registration</button>
                </form>
                <p>You already have an account? <span onClick={() => navigate('/')}>Login here</span></p>
            </div>
        </div>
    )
}