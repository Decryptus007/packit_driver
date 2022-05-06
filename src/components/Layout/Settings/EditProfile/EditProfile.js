import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setProfpic } from "../../../../features/userDetailsReducer"

import './EditProfile.css'

export default function EditProfile() {

    const dispatch = useDispatch()

    const profilePic = useSelector(state => state.userDetails.profilePic.imgDefault)

    const [name, setName] = useState("Mary Jill")
    const nameRef = useRef()

    const [phone, setPhone] = useState("08123456789")
    const phoneRef = useRef()

    const [email, setEmail] = useState("example@gmail.com")
    const emailRef = useRef()

    const [address, setAddress] = useState("Amoyo, Kwara State.")
    const addressRef = useRef()

    let focusName = true
    const editNameFunc = () => {
        focusName = !focusName
        nameRef.current.disabled = focusName
        nameRef.current.focus()
    }

    let focusPhone = true
    const editPhoneFunc = () => {
        focusPhone = !focusPhone
        phoneRef.current.disabled = focusPhone
        phoneRef.current.focus()
    }

    let focusEmail = true
    const editEmailFunc = () => {
        focusEmail = !focusEmail
        emailRef.current.disabled = focusEmail
        emailRef.current.focus()
    }

    let focusAddress = true
    const editAddressFunc = () => {
        focusAddress = !focusAddress
        addressRef.current.disabled = focusAddress
        addressRef.current.focus()
    }

    return (
        <>
            <div className="profileSet">
                <div className="profilePicSet">
                    <img src={profilePic} alt="profilePic" />
                    <label className="setProfilePic">
                        <input type={"file"} accept="image/*" onChange={(e) => {
                            dispatch(setProfpic(URL.createObjectURL(e.target.files[0])))
                        }} />
                        <FontAwesomeIcon icon="fa-solid fa-camera" />
                    </label>
                </div>
                <div className="profileInfo">
                    <input ref={nameRef} value={name} onChange={e => setName(e.target.value)} type={"text"} disabled />
                    <span onClick={editNameFunc}><FontAwesomeIcon icon="fa-solid fa-pencil" /></span>
                    <p>ID: 12345678</p>
                </div>
                <small style={{ color: 'green' }}>Account Status: Verified</small>
            </div>
            <div className="otherProfileinfo">
                <h4>Personal Info</h4>
                <div className="otherData">
                    <div className="otherInfo">
                        <FontAwesomeIcon className="embed1" icon="fa-solid fa-phone" />
                        <input ref={phoneRef} value={phone} onChange={e => setPhone(e.target.value)} type={"number"} disabled />
                        <FontAwesomeIcon onClick={editPhoneFunc} className="embed2" icon="fa-solid fa-pencil" />
                    </div>
                    <div className="otherInfo">
                        <FontAwesomeIcon className="embed1" icon="fa-solid fa-envelope" />
                        <input ref={emailRef} value={email} onChange={e => setEmail(e.target.value)} type={"text"} disabled />
                        <FontAwesomeIcon onClick={editEmailFunc} className="embed2" icon="fa-solid fa-pencil" />
                    </div>
                    <div className="otherInfo">
                        <FontAwesomeIcon className="embed1" icon="fa-solid fa-location-dot" />
                        <input ref={addressRef} value={address} onChange={e => setAddress(e.target.value)} type={"text"} disabled />
                        <FontAwesomeIcon onClick={editAddressFunc} className="embed2" icon="fa-solid fa-pencil" />
                    </div>
                </div>
            </div>
        </>
    )
}