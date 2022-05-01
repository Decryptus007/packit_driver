import React from "react"
// import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './RecentDeliveries.css'


export default function RecentDeliveries() {
    const today = new Date();
    let time = today.getHours() + ':' + today.getMinutes()
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const recentDeliveriesCards = [
        {
            packageCategory: 'Skincare Package',
            packageDetails: 'The Xyz skin cream purchased from Dubai',
            packagePrice: 2000,
            packageDOB: `${time} ${date}`
        },
        {
            packageCategory: 'Beverage Package',
            packageDetails: 'The Whisky is a delightful drink',
            packagePrice: 8000,
            packageDOB: `${time} ${date}`
        },
        {
            packageCategory: 'Electronics Package',
            packageDetails: 'The HDD storage is 32GB',
            packagePrice: 3000,
            packageDOB: `${time} ${date}`
        },
        {
            packageCategory: 'Skincare Package',
            packageDetails: 'This perfume is superb',
            packagePrice: 9000,
            packageDOB: `${time} ${date}`
        }
    ]

    return (
        <div className="recentDeliveriesCards">
            {recentDeliveriesCards.map((card, id) => (
                <div key={id} className="recentDeliveriesCard">
                    <h3>{card.packageCategory}</h3>
                    <p className="black">{card.packageDetails}</p>
                    <div className="innerPackageDetails">
                        <p className="black">{card.packageDOB}</p>
                        <p className="black">Price <br /><span>₦{card.packagePrice}</span></p>
                    </div>
                    <p className="packageView black"><FontAwesomeIcon className="icon" icon="fa-solid fa-eye" />View</p>
                </div>
            ))}

        </div>
    )
}