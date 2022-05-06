import React from "react"
import logoImg from '../../../assets/images/favicon.png'

import './Modal.css'

export default function Modal({ onClick, children }) {


    return (
        <>
            <div className="Modal" onClick={() => onClick && onClick()}></div>
            <div className="info">
                <div style={{borderBottom: '2px solid white'}}>
                    <img style={{margin: 'auto'}} src={logoImg} alt={logoImg} />
                </div>
                {children}
            </div>
        </>
    )
}