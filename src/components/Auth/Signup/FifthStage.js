import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setProfpic, setProfpicState, setSignupStage } from "../../../features/signupReducer";

import Modal from "../../utils/Modal/Modal";

export default function FifthStage(props) {
    const btnRef = useRef()

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const profilePic = useSelector(state => state.signupState.profilePic)

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (profilePic.imgState === true) {
            btnRef.current.disabled = false
        } else {
            btnRef.current.disabled = true
        }
    })

    return (
        <>
            {showModal && <Modal onClick={() => null}>
                <p>Registered Successfully</p>
                <button onClick={() => navigate('/')}>Proceed to Login</button>
            </Modal>}
            <div className="fifth">
                <img src={props.imgFiLogo} alt="Packit" />
                <form onSubmit={e => e.preventDefault()}>
                    <p style={{ fontWeight: "500" }}>Upload Profile Picture</p>
                    <small style={{color: 'red'}}>Mandatory *{'{'}required{'}'}</small>
                    <div>
                        <img src={profilePic.imgDefault} alt="Profile" />
                        <label className="profImgUp">
                            <input style={{ height: "0", width: "0", opacity: "0" }} accept="image/*" type={"file"}
                                onChange={e => {
                                   dispatch(setProfpic(URL.createObjectURL(e.target.files[0])))
                                   dispatch(setProfpicState(true))
                                }}
                            />
                            <FontAwesomeIcon icon="fa-solid fa-camera" />
                        </label>
                    </div>
                    <button type="submit" ref={btnRef} onClick={() => setShowModal(true)}>Submit</button>
                </form>
                <FontAwesomeIcon className="backIcon" icon="fa-solid fa-chevron-left" onClick={() => dispatch(setSignupStage('stage4'))} />
            </div>
        </>
    )
}