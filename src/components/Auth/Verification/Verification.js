import React, { useState } from "react"
import OTPInput, { ResendOTP } from "otp-input-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import Modal from "../../Utilities/Modal/Modal"

import packit from '../../../assets/images/pack it.png'

import './Verification.css'

export default function Verification({ onVerify, email, setVNxtPg }) {
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
            onVerify()
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
           {/* {showModal && <Modal onClick={tggleModal}>{modalMssg}</Modal>} */}
            <div className="vLayout">
                <div className="vLayoutUI">
                    <img src={packit} alt="vLogo" />
                    <div className="vText">
                        <h3>Account Verification</h3>
                        <p>We will send verification code to your email: {email}</p>
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
            <FontAwesomeIcon className="backIcon" icon="fa-solid fa-chevron-left" onClick={() => setVNxtPg('stage2')} />
        </>
    )
}