import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavItem from './NavItems/NavItem'

import './SideBar.css'
import logImg from '../../images/pack it 111.png'

export default function SideBar({ signOutUser, showModal, showSideBar }) {
    return (
        <>
            <div onClick={() => showSideBar()} id='sideBarOverlay'></div>
            <div className='sideBar'>
                <FontAwesomeIcon onClick={() => showSideBar()} id='cancel' icon="fa-solid fa-xmark" />
                <div className='brandLogo'>
                    <img src={logImg} alt='Brand Logo' />
                </div>
                <NavItem signOutUser={() => signOutUser()} showModal={() => showModal()} />
            </div>
        </>
    )
}