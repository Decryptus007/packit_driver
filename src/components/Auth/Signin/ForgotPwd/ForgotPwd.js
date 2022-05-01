import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ForgotPwd.css'

import packitLogo from '../../../../assets/images/pack it.png'

export default function ForgotPwd(props) {
    const btnRef = useRef()

    const navigate = useNavigate()

    // eslint-disable-next-line no-useless-escape
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        if (props.fgEmail.match(mailformat)) {
            btnRef.current.disabled = false
        } else {
            btnRef.current.disabled = true
        }
    })


    return (
        <div className="forgotPwd">
            <img src={packitLogo} alt="Packit" />
            <form onSubmit={e => e.preventDefault()}>
                <p>Input your email to recieve the OTP to reset your password.</p>
                <input type={'email'} placeholder="Your Email" value={props.fgEmail} onChange={e => props.setFgEmail(e.target.value)} />
                <button ref={btnRef} type="submit" onClick={() => props.setFgpwd()}>Send OTP</button>
            </form>
            <FontAwesomeIcon className="backIcon" icon="fa-solid fa-chevron-left" onClick={() => navigate('/')} />
        </div>
    )
}