import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"

import './WithDHistory.css'

import CashWithdraw from "../../../assets/images/cash withdraw.svg"
import Earning from "../../../assets/images/earning.svg"

export default function WithDHistory() {
    const wHistoryDummy = ['Cash History', 'Earning', 'Cash History', 'Earning']


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
                <main>
                    <div className="withdrawCard">
                        <p><span><FontAwesomeIcon style={{ fontSize: 'x-large', color: 'white', marginRight: '1%' }} icon="fa-solid fa-hand-holding-dollar" /></span>Earned</p>
                        <h1><b>25000.00</b></h1>
                        <div>
                            <button>Withdraw Earning</button>
                            <button>Change Withdrawal Bank</button>
                        </div>
                    </div>
                    <div className="wHistoryHolder">
                        {wHistoryDummy.map((item, id) => {
                            let imgSrc
                            let priceStyle
                            if (item === "Cash History") {
                                imgSrc = CashWithdraw
                                priceStyle = {color: 'red'}
                            } else {
                                imgSrc = Earning
                                priceStyle = {color: 'limegreen'}
                            }
                            return <div key={id} className="withdrawHistory">
                                <div className="withdrawDetails">
                                    <img src={imgSrc} alt="CashWithdraw" />
                                    <div className="wHead">
                                        <h3><b>{item}</b></h3>
                                        <div>
                                            <small>23/07/2022</small>
                                            <small>3:54pm</small>
                                        </div>
                                    </div>
                                </div>
                                <p style={priceStyle}><b>-₦15000</b></p>
                            </div>
                        })}
                    </div>
                </main>
            </div>
        </Layout>
    )
}