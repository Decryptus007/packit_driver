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


    return (
        <>
            {showAuthModal && <Modal onClick={() => dispatch(closeAuthModal())} >
                <p>Are you sure you want to logout?</p>
                <div className='confirmBtnHolder'>
                    <button className='confirmBtn' onClick={() => {
                        dispatch(logout())
                        dispatch(closeAuthModal())
                    }}>Yes</button>
                    <button className='confirmBtn' onClick={() => dispatch(closeAuthModal())}>No</button>
                </div>
            </Modal>}

            {showSideBarState && <SideBar />}
            <div className="webApp"> {children} </div>
        </>
    )
}