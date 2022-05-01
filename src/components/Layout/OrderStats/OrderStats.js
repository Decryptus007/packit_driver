
import React from 'react'

import './OrderStats.css'

export default function OrderStats(props) {

    return (
        <div className="orderStats">
            <div id="activeStat" className="orderStat">
                <h3>{props.cardTitle1}</h3>
                <h1>{props.cardAmount1}</h1>
            </div>
            <div className="orderStat">
                <h3>{props.cardTitle2}</h3>
                <h1>{props.cardAmount2}</h1>
            </div>
            <div className="orderStat">
                <h3>{props.cardTitle3}</h3>
                <h1>{props.cardAmount3}</h1>
            </div>
            <div id="cancelStat" className="orderStat">
                <h3>{props.cardTitle4}</h3>
                <h1>{props.cardAmount4}</h1>
            </div>
        </div>
    )
}