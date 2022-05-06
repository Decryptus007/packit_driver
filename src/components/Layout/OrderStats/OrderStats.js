import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './OrderStats.css'

export default function OrderStats(props) {

    let cardStyle = {}
    let amountStyle = {}
    let ratingIcon = false
    const ratingIconStyle = { color: 'white', }

    const amount1 = useSelector(state => state.userUtilsState.accepted)
    const amount2 = useSelector(state => state.userUtilsState.declined)
    const amount3 = useSelector(state => state.userUtilsState.rating)

    if (props.section === 'Home') {
        cardStyle = { backgroundColor: 'black', color: 'white' }
        amountStyle = { color: '#10ad5e' }
        ratingIcon = true
    }

    <div style={cardStyle} id="cancelStat" className="orderStat">
        {ratingIcon && <FontAwesomeIcon style={ratingIconStyle} icon="fa-solid fa-ban" />}
        <h3>{props.cardTitle4}</h3>
        <h1 style={amountStyle}>{props.cardAmount4}</h1>
    </div>
    return (
        <div className="orderStats">
            <div style={cardStyle} id="activeStat" className="orderStat">
                {ratingIcon && <FontAwesomeIcon style={ratingIconStyle} icon="fa-solid fa-circle-check" />}
                <h3>{props.cardTitle1 || 'Accepted'}</h3>
                <h1 style={amountStyle}>{props.cardAmount1 || amount1}</h1>
            </div>
            <div style={cardStyle} className="orderStat">
                {ratingIcon && <FontAwesomeIcon style={ratingIconStyle} icon="fa-solid fa-circle-xmark" />}
                <h3>{props.cardTitle2 || 'Declined'}</h3>
                <h1 style={amountStyle}>{props.cardAmount2 || amount2}</h1>
            </div>
            <div style={cardStyle} className="orderStat">
                {ratingIcon && <FontAwesomeIcon style={ratingIconStyle} icon="fa-solid fa-star" />}
                <h3>{props.cardTitle3 || 'Rating'}</h3>
                <h1 style={amountStyle}>{props.cardAmount3 || amount3}</h1>
            </div>
            {props.cardTitle4 && <div style={cardStyle} id="cancelStat" className="orderStat">
                {ratingIcon && <FontAwesomeIcon style={ratingIconStyle} icon="fa-solid fa-ban" />}
                <h3>{props.cardTitle4}</h3>
                <h1 style={amountStyle}>{props.cardAmount4}</h1>
            </div>}
        </div>
    )
}