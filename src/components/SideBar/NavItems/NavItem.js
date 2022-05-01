
import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NavItem.css'

export default function NavItem({ showModal, signOutUser }) {
    const [clicked, setClicked] = useState('');
    const navigate = useNavigate()
    const location = useLocation()

    const navigateTo = (param) => {
        setClicked(location.pathname)
        navigate(param)
    }

    const handleClick = (id) => {
        switch (id) {
            case 1:
                navigateTo('/')
                break;
            case 2:
                navigateTo('/wallet')
                break;

            case 3:
                navigateTo('/livetracking')
                break;

            case 4:
                navigateTo('/chats')
                break;

            case 5:
                navigateTo('/notification')
                break;

            case 6:
                navigateTo('/support')
                break;

            case 7:
                navigateTo('/settings')
                break;

            default:
                navigate("/404")
                break;
        }
    }

    const navLinks = [
        { name: 'Home', icon: <FontAwesomeIcon className='icons' icon={['fas', 'house-user']} />, directTo: () => handleClick(1) },
        { name: 'Wallet', icon: <FontAwesomeIcon className='icons' icon={['fas', 'wallet']} />, directTo: () => handleClick(2) },
        { name: 'Live Tracking', icon: <FontAwesomeIcon className='icons' icon={['fas', 'chalkboard']} />, directTo: () => handleClick(3) },
        { name: 'Chats', icon: <FontAwesomeIcon className='icons' icon={['fas', 'message']} />, directTo: () => handleClick(4) },
        { name: 'Notification', icon: <FontAwesomeIcon className='icons' icon={['fas', 'bell']} />, directTo: () => handleClick(5) },
        { name: 'Support', icon: <FontAwesomeIcon className='icons' icon={['fas', 'headset']} />, directTo: () => handleClick(6) },
        { name: 'Settings', icon: <FontAwesomeIcon className='icons' icon={['fas', 'gears']} />, directTo: () => handleClick(7) },
        {
            name: 'Logout',
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'right-from-bracket']} />,
            directTo: () => {
                showModal()
                signOutUser()
            }
        },
    ]

    return (
        <>
            {navLinks.map((navLink, id) => {
                let address = `/${navLink.name.toLowerCase()}`
                if (address === "/home") {
                    address = "/"
                }
                if (address === "/live tracking") {
                    address = "/livetracking"
                }

                let output
                if (address === clicked) {
                    output = <div className="navLinks onFocus" key={id} onClick={navLink.directTo}> {navLink.icon} {navLink.name} </div>
                } else {
                    output = <div className="navLinks" key={id} onClick={navLink.directTo}> {navLink.icon} {navLink.name} </div>
                }
                return output
            })}
        </>
    )
}