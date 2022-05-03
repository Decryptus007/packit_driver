import React from "react"
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"

export default function DeliveryHistory() {


    return (
        <Layout>
            <div className="deliveryHistory">
                <HomeHeader currentPage="Home" />
                <OrderStats
                    cardTitle1="Accepted"
                    cardTitle2="Declined"
                    cardTitle3="Rating"
                    cardTitle4="Cancelled"
                    cardAmount1="20"
                    cardAmount2="5"
                    cardAmount3="3.5"
                    cardAmount4="3"
                />
            </div>
            <main>
                <h3 style={{textAlign: 'center'}}>Delivery History Here :)</h3>
            </main>
        </Layout>
    )
}