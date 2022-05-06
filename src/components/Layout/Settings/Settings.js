import React from "react"
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import { openAuthModal } from '../../../features/authModalReducer'

import './Settings.css'

export default function Settings() {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    //I WANNA DISPLAY A CONFIRMATION MODAL DIALOG WINDOW BEFORE LOGGING OUT
    return (
        <Layout>
            <div className="settings">
                <HomeHeader currentPage="Settings" />
                <div className="settingsUI">
                    <div className="settingsLayout1">
                        <div className="settingActn" onClick={() => navigate("editProfile")}>
                            <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-user-pen" />
                            <p>Edit Profile</p>
                        </div>
                        <div className="settingActn" onClick={() => navigate("security")}>
                            <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-lock" />
                            <p>Security</p>
                        </div>
                        <div className="settingActn" onClick={() => navigate("notificationSettings")}>
                            <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-sliders" />
                            <p>Notification Settings</p>
                        </div>
                        <div className="settingActn" onClick={() => navigate("about")}>
                            <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-circle-info" />
                            <p>About</p>
                        </div>
                        <div className="settingActn" onClick={() => dispatch(openAuthModal())}>
                            <FontAwesomeIcon className="settingActnLog" icon="fa-solid fa-right-from-bracket" />
                            <p>LOGOUT</p>
                        </div>
                    </div>
                    <div className="settingsLayout2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Layout>
    )
}