import React from "react"
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"

import './WithDHistory.css'

export default function WithDHistory() {
    

    return (
        <Layout>
            <div className="withDHistory">
                <HomeHeader currentPage="Withdrawal History" />
                <OrderStats
                    cardTitle1="Total Transaction"
                    cardTitle2="Total Earning"
                    cardTitle3="Total Withdrawal"
                    cardTitle4="Bonus Earned"
                    cardAmount1={`₦ 200000`}
                    cardAmount2={`₦ 178000`}
                    cardAmount3={`₦ 120000`}
                    cardAmount4={`₦ 5000`}
                />
            </div>
            <main>
                <h2 style={{textAlign: 'center'}}>Withdrawal History Coming Soon :)</h2>
            </main>
        </Layout>
    )
}