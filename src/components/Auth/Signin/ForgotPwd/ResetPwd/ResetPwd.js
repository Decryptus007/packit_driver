import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../../../../utils/Modal/Modal";

import './ResetPwd.css'

function ResetPwd() {

    const [newPwd, setNewPwd] = useState('')
    const [rePwd, setRePwd] = useState('')

    const [showModal, setShowModal] = useState(false)

    const btnRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        if ((newPwd !== '' && newPwd.length >= 8) && (newPwd === rePwd)) {
            btnRef.current.disabled = false
        } else {
            btnRef.current.disabled = true
        }
    }, [newPwd, rePwd])


    return (
        <>
            {showModal && <Modal onClick={() => null}>
                <p>Password Changed Successfully</p>
                <button onClick={() => navigate('/')}>Proceed to Login</button>
            </Modal>}
            <div className="resetPwdUI">
                <form onSubmit={e => e.preventDefault()} >
                    <p>Enter New Password</p>
                    <small style={{color: 'red'}}>Password must contain 8 characters or more</small>
                    <input title="Password must contain 8 characters or more" onChange={(e) => setNewPwd(e.target.value)} type={"password"} />
                    <p>Re-enter New Password</p>
                    <input onChange={(e) => setRePwd(e.target.value)} type={"password"} />
                    <button ref={btnRef} onClick={() => setShowModal(true)} type="submit">Save</button>
                </form>
            </div>
        </>
    );
}

export default ResetPwd;