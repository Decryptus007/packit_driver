import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"
import RecentDeliveries from "./RecentDeliveries/RecentDeliveries"

import './Home.css'
import './HomeMobile.css'

import reqDeliveryImg from '../../../assets/images/deliveryItem.jpg'

export default function Home() {
    // eslint-disable-next-line no-unused-vars
    const [requestAvailable, setRequestAvailable] = useState(true)

    let noRequestStyle = {}

    if (!requestAvailable) {
        noRequestStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50%'
        }
    }

    const requestWindow = (<>
        <img src={reqDeliveryImg} alt="reqDeliveryImg" />
        <main>
            <div className="main1">
                <p>Pick up Address:</p>
                <small>No 1, Kwara Poly Road, Ilorin, Kwara State.</small>
                <p>Delivery Address:</p>
                <small>No 25, Sango Road, Ilorin, Kwara State.</small>
            </div>
            <div className="main2">
                <h4 style={{ color: '#10ad5e', fontWeight: '700' }}>₦{'2000'}</h4>
                <small style={{ fontWeight: '600', fontSize: 'x-small' }}>2.3km</small>
                <div>
                    <button style={{ background: '#10ad5e', color: 'black' }}>Accept</button>
                    <button onClick={() => setRequestAvailable(false)}
style={{ background: 'red', color: 'white' }}>Decline</button>
                </div>
            </div>
        </main>
    </>)

    return (
        <Layout>
            <div className="home">
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
                <div className="deliveryFund">
                    <div className="reqDelivery">
                        <small style={{ fontWeight: '600', paddingBottom: '2%', fontSize: 'x-small' }}>New Request</small>
                        <section style={noRequestStyle}>
                            {requestAvailable ? requestWindow : <h2 style={{color: 'grey'}}>No Request</h2>}
                        </section>
                    </div>
                    <div className="fundWallet">
                        <p><FontAwesomeIcon style={{ fontSize: 'x-large', color: 'white' }} icon="fa-solid fa-hand-holding-dollar" /> Earned</p>
                        <h1><b>25000.00</b></h1>
                        <Link className="fundBtn" to='/wallet'>
                            <div>Withdraw Earnings</div>
                        </Link>
                    </div>
                </div>
                <div className="deliveryHistory">
                    <div className="recentDeliveriesHeader">
                        <h3>Delivered</h3><hr />
                    </div>
                    <RecentDeliveries />
                </div>
            </div>
        </Layout>
    )
}
