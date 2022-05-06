
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { openAuthModal } from '../../../features/authModalReducer'
import { closeSideBar } from '../../../features/sideBarReducer'

import './NavItem.css'

export default function NavItem() {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const location = useLocation()

    const clicked = location.pathname

    const navigateTo = (param) => {
        navigate(param)

        if (window.matchMedia("(max-width: 1024px)").matches) {
            dispatch(closeSideBar())
        }
    }

    const handleClick = (id) => {
        switch (id) {
            case 1:
                navigateTo('/')
                break;
            case 2:
                navigateTo('/deliveryhistory')
                break;

            case 3:
                navigateTo('/withdrawalhistory')
                break;

            case 4:
                navigateTo('/locationmap')
                break;

            case 5:
                navigateTo('/chat')
                break;

            case 6:
                navigateTo('/notification')
                break;

            case 7:
                navigateTo('/support')
                break;

            case 8:
                navigateTo('/settings')
                break;

            default:
                navigate("/404")
                break;
        }
    }

    const navLinks = [
        {
            name: 'Home',
            styles: { margin: '10% auto 0', },
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'house-user']} />,
            directTo: () => handleClick(1)
        },
        {
            name: 'Delivery History',
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'clock-rotate-left']} />,
            directTo: () => handleClick(2)
        },
        {
            name: 'Withdrawal History',
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'check-to-slot']} />,
            directTo: () => handleClick(3)
        },
        {
            name: 'Location Map',
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'route']} />,
            directTo: () => handleClick(4)
        },
        {
            name: 'Chat',
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'message']} />,
            directTo: () => handleClick(5)
        },
        {
            name: 'Notification',
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'bell']} />,
            directTo: () => handleClick(6)
        },
        {
            name: 'Support',
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'headset']} />,
            directTo: () => handleClick(7)
        },
        {
            name: 'Settings',
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'gears']} />,
            directTo: () => handleClick(8)
        },
        {
            name: 'Logout',
            styles: { margin: '15% auto 10%', color: '#a0b3da' },
            icon: <FontAwesomeIcon className='icons' icon={['fas', 'right-from-bracket']} />,
            directTo: () => { dispatch(openAuthModal()) }
        },
    ]

    return (
        <>
            {navLinks.map((navLink, id) => {
                let address = `/${navLink.name.toLowerCase()}`
                
                if (address === "/home") {
                    address = "/"
                }

                if (address === "/delivery history") {
                    address = "/deliveryhistory"
                }

                if (address === "/withdrawal history") {
                    address = "/withdrawalhistory"
                }

                let output

                if (address === clicked) {
                    output = <div style={navLink.styles}
                        className={"navLinks onFocus" } key={id} onClick={navLink.directTo}>
                        {navLink.icon} {navLink.name}
                    </div>
                } else {
                    output = <div style={navLink.styles}
                        className="navLinks" key={id} onClick={navLink.directTo}>
                        {navLink.icon} {navLink.name}
                    </div>
                }
                return output
            })}
        </>
    )
}