import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"

import './DeliveryHistory.css'

import itemLogo from '../../../assets/images/deliveryItem.jpg'

export default function DeliveryHistory() {

    const dummy = [{}, {}, {}]

    return (
        <Layout>
            <div className="deliveryHistory">
                <HomeHeader currentPage="Delivery History" />
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
                <main>
                    {dummy.map((_, id) => (
                        <div className="deliveries" key={id}>
                            <div className="item">
                                <img src={itemLogo} alt="itemLogo" />
                                <div style={{ textAlign: 'center', padding: '1%' }}>
                                    <p><b>Sneakers</b></p>
                                    <small style={{ fontSize: 'small' }}>The sneakers is red and white...</small>
                                </div>
                            </div>
                            <div className="address">
                                <div>
                                    <p><b>Pick up Address:</b></p>
                                    <small>No 1, Kwara Poly Road, Ilorin, Kwara State.</small>
                                </div>
                                <div>
                                    <p><b>Delivery Address:</b></p>
                                    <small>No 25, Sango Road, Ilorin, Kwara State.</small>
                                </div>
                            </div>
                            <div className="rating">
                                <div style={{ color: 'black' }}>
                                    <p><FontAwesomeIcon className="rateIcon" icon="fa-solid fa-star" /></p>
                                    <p><b>Rating</b></p>
                                    <h1 style={{ color: '#10ad5e' }}><b>3.5</b></h1>
                                </div>
                                <div>
                                    <small className="ratingRemark">Good Job</small>
                                    <small className="price">Price <b style={{ color: 'red' }}>₦20000</b></small>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </Layout>
    )
}