
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChangePwd from "./ChangePassword"

import './Security.css'

export default function Security() {
    const [securityPage, setSecurityPage] = useState("")
    //USE SPINNER HERE
    const [modifySecurity, setModifySecurity] = useState((<div className="loader">Loading...</div>))

    useEffect(() => {
    const modifySecurityPage = () => {
        if (securityPage === "") {
            setModifySecurity((
                <div className="securityUI">
                    <div className="securityLink" onClick={() => setSecurityPage("changePwd")}>
                        <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-key" />
                        <p>Change Password</p>
                    </div>
                    <div className="securityLink">
                        <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-map-location-dot" />
                        <p>Login Activity</p>
                    </div>
                    <div className="securityLink">
                        <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-map-pin" />
                        <p>Saved Login Information</p>
                    </div>
                </div>
            ))
        } else if (securityPage === "changePwd") {
            setModifySecurity(<ChangePwd onClick={() => setSecurityPage("")} />)
        }
    }
    modifySecurityPage()
    
    }, [securityPage])

    return (
        modifySecurity
    )
}