import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { closeSideBar } from '../../features/sideBarReducer'

import NavItem from './NavItems/NavItem'

import './SideBar.css'

import logImg from '../../assets/images/pack it.png'

export default function SideBar() {
    const dispatch = useDispatch()


    return (
        <>
            <div onClick={() => dispatch(closeSideBar())} id='sideBarOverlay'></div>
            <div className='sideBar'>
                <FontAwesomeIcon onClick={() => dispatch(closeSideBar())} id='cancel' icon="fa-solid fa-xmark" />
                <div className='brandLogo'>
                    <img src={logImg} alt='Brand Logo' />
                </div>
                <NavItem />
            </div>
        </>
    )
}