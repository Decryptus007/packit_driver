import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { login } from '../../../features/authReducer'
import Modal from "../../utils/Modal/Modal";

import './Signin.css'

import packitLogo from '../../../assets/images/favicon.png'
import nairaHand from '../../../assets/images/naira hand 1.png'

export default function Signin() {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const btnRef = useRef()

    const [showModal, setShowModal] = useState(false)

    const [emailInput, setEmailInput] = useState('')
    const [pwd, setPwd] = useState('')

    // eslint-disable-next-line no-useless-escape
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        if (emailInput.match(mailformat) && (pwd !== '' && pwd.length >= 8)) {
            btnRef.current.disabled = false
        } else {
            btnRef.current.disabled = true
        }
    })

    return (
        <div className="Signin">
        {showModal && <Modal onClick={() => setShowModal(false)}>
            <p>Incorrect Login Details</p>
            <p>Contact the admin for the credentials</p>
        </Modal> }
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
                        <input
                            value={emailInput}
                            onChange={e => setEmailInput(e.target.value)}
                            placeholder="Email" type={"email"} autoComplete="true"
                        />
                    </div>
                    <div>
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                        <input
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                            placeholder="Password" type={"password"} autoComplete="true"
                        />
                    </div>
                    <button type="submit" ref={btnRef} onClick={() => {
                        if (emailInput === 'dom@test.com' && pwd === '12345678') {
                            dispatch(login())
                        } else {
                            setShowModal(true)
                        }
                    }}>Log In</button>
                </form>
                <small onClick={() => navigate('/forgotpwd')}>Forgot Password?</small>
                <p>You don't have an account?</p>
                <p id="signup" onClick={() => navigate('/signup')}>Create an account here &#8599;</p>
            </div>
        </div>
    )
} 