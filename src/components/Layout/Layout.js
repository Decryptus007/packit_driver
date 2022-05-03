import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { closeAuthModal } from '../../features/authModalReducer'
import { logout } from '../../features/authReducer'

import SideBar from "../SideBar/SideBar"
import Modal from '../utils/Modal/Modal'

import './Layout.css'

export default function Layout({ children }) {
    const dispatch = useDispatch()

    const showSideBarState = useSelector(state => state.sideBarState.value)
    const showAuthModal = useSelector(state => state.authModalState.value)
    
    const buttonHolder = {
        margin: '5% 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    }
    const buttonStyles = {
        margin: '2% 0',
        width: '40%',
    }

    return (
        <>
            {showAuthModal && <Modal onClick={() => dispatch(closeAuthModal())} >
                <p>Are you sure you want to logout?</p>
                <div style={buttonHolder}>
                    <button style={buttonStyles} onClick={() => {
                        dispatch(logout())
                        dispatch(closeAuthModal())
                    }}>Yes</button>
                    <button style={buttonStyles} onClick={() => dispatch(closeAuthModal())}>No</button>
                </div>
            </Modal>}

            {showSideBarState && <SideBar />}
            <div className="webApp"> {children} </div>
        </>
    )
}