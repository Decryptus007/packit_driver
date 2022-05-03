import React from "react"
import logoImg from '../../../assets/images/favicon.png'

import './Modal.css'

export default function Modal({ onClick, children }) {

    return (
        <>
            <div className="Modal" onClick={() => onClick()}></div>
            <div className="info">
                <img src={logoImg} alt={logoImg} />
                {children}
            </div>
        </>
    )
}