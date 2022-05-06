import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"

import './Notification.css'
import './NotificationMobile.css'

export default function Notification() {

    const [notification, setNotification] = useState([])

    const [updatNot, setUpdateNot] = useState([...notification])

    useEffect(() => {
        setNotification([...updatNot])
    }, [updatNot])

    const delNotification = (id) => {
        updatNot.splice(id, 1)
        setUpdateNot([...updatNot])
    }

    const clearNotification = () => {
        updatNot.length = 0
        setUpdateNot([...updatNot])
    }


    return (
        <Layout>
            <div className="notification">
                <HomeHeader currentPage="Notification" />
                <div className="noticationUI">
                    <div className="notifyHeader">
                        <h3>Recent</h3>
                        <div className="notifyAction">
                            <p className="notifyActionBtn">Mark All as Read</p>
                            <p className="notifyActionBtn" onClick={clearNotification} >Clear All</p>
                        </div>
                    </div>
                    <div className="notifyMssgs">
                        {notification.length !== 0 ? notification.map((notify, id) => (
                            <div key={id} className="notifyMssg">
                                <div className="deleteNoti" onClick={() => delNotification(id)}>
                                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                                </div>
                                <div className="notiDetails">
                                    <div className="notiDetailsMain">
                                        <img src={notify.notifyImg} alt="profilePic" />
                                        <div className="notiDetailsText">
                                            <h4>{`${notify.notifyName}: `}</h4>
                                            <p>{notify.theMssg}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="notiTime">{notify.time}</p>
                            </div>
                        )) : <h2 style={{ textAlign: 'center', color: 'grey' }}>No new notification :)</h2>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}