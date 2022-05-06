
import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { openSidebar } from "../../../features/sideBarReducer"

import './HeaderTitle.css'
import './HeaderTitleMobile.css'

export default function HomeHeader(props) {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const profileImg = useSelector(state => state.userDetails.profilePic.imgDefault)
    const fname = useSelector(state => state.userDetails.fname)
    const lname = useSelector(state => state.userDetails.lname)


    return (
        <div className="homeHeader">
            <div className="headerM">
                <FontAwesomeIcon onClick={() => dispatch(openSidebar())} icon="fa-solid fa-bars-staggered" />
                <h2 style={{display: "inline-block", marginLeft: "5%"}}>{props.currentPage}</h2>
            </div>
            <div className="homeHeaderMenu">
                <div className="icons">
                    <Link className="notification" to="/notification">
                        <FontAwesomeIcon icon="fa-solid fa-envelope-open-text" />
                    </Link>
                </div>

                <div className="homeProfile">
                    <div className="homeProfileText">
                        <h4>{fname || 'Driver'} {lname || 'Name'}</h4>
                        <p>ID: 12345678</p>
                    </div>
                    <div className="profileImage" onClick={() => navigate('/settings/editProfile')}>
                        <img src={profileImg} alt="profilePic" />
                    </div>
                </div>
            </div>
        </div>
    )
}