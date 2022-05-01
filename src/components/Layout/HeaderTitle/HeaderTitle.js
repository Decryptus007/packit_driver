
import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profileImg from '../../../images/profilePic.jpg'

import './HeaderTitle.css'
import './HeaderTitleMobile.css'

export default function HomeHeader(props) {

    return (
        <div className="homeHeader">
            <div className="headerM">
                <FontAwesomeIcon onClick={() => props.showSideBar()} icon="fa-solid fa-bars-staggered" />
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
                        <h4>Mary Jill</h4>
                        <p>ID: 12345678</p>
                    </div>
                    <div className="profileImage">
                        <img src={profileImg} alt="profilePic" />
                    </div>
                </div>
            </div>
        </div>
    )
}