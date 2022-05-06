
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ChangePassword.css'

export default function ChangePwd({ onClick }) {

    return (
        <div className="changePwdUI">
            <div onClick={onClick} className="goBack">
                <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-arrow-left" />
            </div>
            <form className="changePwdForm" onSubmit={e => e.preventDefault()}>
                <h3>Change Password</h3>
                <input className="changePwdInput" type={"text"} placeholder="Current Password" required />
                <input className="changePwdInput" type={"text"} placeholder="New Password" required />
                <input className="changePwdInput" type={"text"} placeholder="Re-enter New Password" required />
                <button type={"submit"} className="changePwdBtn" >SAVE</button>
            </form>
        </div>
    )
}