import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setSignupStage, setFname, setLname, setPhone, setEmail, setPwd, setCpwd } from "../../../features/signupReducer";

import packitLogo from '../../../assets/images/pack it.png'
import truck from '../../../assets/images/signOutImg.png'

export default function FirstStage() {

    const dispatch = useDispatch()
    const fname = useSelector(state => state.signupState.fname)
    const lname = useSelector(state => state.signupState.lname)
    const phone = useSelector(state => state.signupState.phone)
    const email = useSelector(state => state.signupState.email)
    const pwd = useSelector(state => state.signupState.pwd)
    const cpwd = useSelector(state => state.signupState.cpwd)
    
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
                        <input value={fname} placeholder="First Name" type={"text"} onChange={(e) => dispatch(setFname(e.target.value))} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-person" />
                        <input placeholder="Last Name" type={"text"} value={lname} onChange={(e) => dispatch(setLname(e.target.value))} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-phone" />
                        <input placeholder="Phone No" type={"tel"} value={phone} onChange={(e) => dispatch(setPhone(e.target.value))}/>
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-at" />
                        <input placeholder="Email" type={"email"} value={email} onChange={(e) => dispatch(setEmail(e.target.value))}/>
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                        <input placeholder="Password" type={"password"} value={pwd} onChange={(e) => dispatch(setPwd(e.target.value))}/>
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                        <input placeholder="Confirm password" type={"password"} value={cpwd} onChange={(e) => dispatch(setCpwd(e.target.value))}/>
                    </div>
                    <button style={{width: "100%"}} type="submit" onClick={() => dispatch(setSignupStage('stage2'))}>Continue Registration</button>
                </form>
                <p>You already have an account? <span onClick={() => navigate('/')}>Login here &#8599;</span></p>
            </div>
        </div>
    )
}