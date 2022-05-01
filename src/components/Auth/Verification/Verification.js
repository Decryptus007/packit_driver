import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import OTPInput, { ResendOTP } from "otp-input-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from '../../utils/Modal/Modal'

// import Modal from "../../Utilities/Modal/Modal"

import packit from '../../../assets/images/pack it.png'

import './Verification.css'

export default function Verification(props) {
    const navigate = useNavigate()

    const [OTP, setOTP] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [modalMssg, setModalMssg] = useState("Error fetching data")

    const tggleModal = () => {
        setShowModal(!showModal)
    }

    let accessCode = "1111"

    const getLoggedIn = () => {
        if (OTP === accessCode) {
            setModalMssg("Logged In Successfully")
            setShowModal(true)
            props.fwdPg ? props.fwdPg() : props.resetPwd()
        } else if (OTP === "") {
            setModalMssg("Input your OTP code")
            setShowModal(true)
        } else {
            setModalMssg("Incorrect OTP Code")
            setShowModal(true)
        }
    }

    return (
        <>
            {showModal && <Modal onClick={tggleModal}>{modalMssg}</Modal>}
            <div className="vLayout">
                <div className="vLayoutUI">
                    <img src={packit} alt="vLogo" />
                    <div className="vText">
                        <h3>Account Verification</h3>
                        <p>We will send verification code to your email: <span style={{ color: "#10ad5e" }}>{props.email}</span></p>
                    </div>
                    <div className="otpBoxes">
                        <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            autoFocus
                            OTPLength={4}
                            otpType="number"
                            disabled={false}
                            secure
                        />
                    </div>
                    <div className="verifyBtns">
                        <div onClick={getLoggedIn} className="verify">Verify</div>
                        <div className="resendUI">
                            <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                        </div>
                    </div>
                </div>
            </div>
            <FontAwesomeIcon className="backIcon" icon="fa-solid fa-chevron-left" onClick={() => {
                props.backPg ? props.backPg() : navigate('/forgotpwd')
            }
            } />
        </>
    )
}