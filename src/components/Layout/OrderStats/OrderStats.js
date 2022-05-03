import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './OrderStats.css'

export default function OrderStats(props) {

    let cardStyle = {}
    let amountStyle = {}
    let ratingIcon = false
    const ratingIconStyle = { color: 'white', }

    if (props.cardTitle1 === 'Accepted') {
        cardStyle = { backgroundColor: 'black', color: 'white' }
        amountStyle = { color: '#10ad5e' }
        ratingIcon = true
    }

    return (
        <div className="orderStats">
            <div style={cardStyle} id="activeStat" className="orderStat">
                {ratingIcon && <FontAwesomeIcon style={ratingIconStyle} icon="fa-solid fa-circle-check" />}
                <h3>{props.cardTitle1}</h3>
                <h1 style={amountStyle}>{props.cardAmount1}</h1>
            </div>
            <div style={cardStyle} className="orderStat">
                {ratingIcon && <FontAwesomeIcon style={ratingIconStyle} icon="fa-solid fa-circle-xmark" />}
                <h3>{props.cardTitle2}</h3>
                <h1 style={amountStyle}>{props.cardAmount2}</h1>
            </div>
            <div style={cardStyle} className="orderStat">
                {ratingIcon && <FontAwesomeIcon style={ratingIconStyle} icon="fa-solid fa-star" />}
                <h3>{props.cardTitle3}</h3>
                <h1 style={amountStyle}>{props.cardAmount3}</h1>
            </div>
            <div style={cardStyle} id="cancelStat" className="orderStat">
                {ratingIcon && <FontAwesomeIcon style={ratingIconStyle} icon="fa-solid fa-ban" />}
                <h3>{props.cardTitle4}</h3>
                <h1 style={amountStyle}>{props.cardAmount4}</h1>
            </div>
        </div>
    )
}