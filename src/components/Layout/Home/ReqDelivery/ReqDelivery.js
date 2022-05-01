
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../../Layout'
import HomeHeader from '../../HeaderTitle/HeaderTitle'
import Summary from './Summary/Summary'
import Modal from '../../../Utilities/Modal/Modal'

import './ReqDelivery.css'
import './ReqDeliveryMobile.css'

export default function ReqDelivery({ signOutUser, showSideBar, showSideBarState }) {

    const [vehicle, setVehicle] = useState('')
    const [pickupAd, setPickupAd] = useState('')
    const [destAd, setDestAd] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('') //The output is in 24hrs format
    const [desc, setDesc] = useState('')
    const [reqTime, setReqTime] = useState('')
    const [itemImg, setItemImg] = useState('')
    const [rcvName, setRcvName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [altNum, setAltNum] = useState('')

    const [showSummary, setShowSummary] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const requestSuccess = () => {
        setShowSummary(false)
        setShowModal(true)
    }


    return (
        <>
            {showModal && <Modal onClick={() => setShowModal(!showModal)}>
                    <h3>We Are Processing Your Request</h3>
                    <p>Your Delivery Will Start Soon.</p>
                </Modal>}
            {showSummary && <Summary
                closeSum={() => setShowSummary(!showSummary)}
                reqSuccess={requestSuccess}
                vehicle={vehicle}
                pickupAd={pickupAd}
                destAd={destAd}
                date={date}
                time={time}
                desc={desc}
                reqTime={reqTime}
                itemImg={itemImg}
                rcvName={rcvName}
                phoneNum={phoneNum}
                altNum={altNum} />}
            <Layout signOutUser={signOutUser} showSideBar={showSideBar} showSideBarState={showSideBarState}>
                <div className='reqDeliveryPage'>
                    <HomeHeader currentPage="New Delivery" showSideBar={showSideBar} showSideBarState={showSideBarState} />
                    <div className='reqDeliveryUI'>
                        <h3 style={{fontWeight: 500, marginTop: "3%"}}>Select Vehicle:</h3 >
                        <div className='selectVehicle'>
                            <div tabIndex={0} className='bike' onClick={() => setVehicle('Bike')}>
                                <FontAwesomeIcon icon="fa-solid fa-motorcycle" />
                                <p>Bike</p>
                            </div>
                            <div tabIndex={0} className='keke' onClick={() => setVehicle('Keke')}>
                                <FontAwesomeIcon icon="fa-solid fa-caravan" />
                                <p>Keke Napep</p>
                            </div>
                            <div tabIndex={0} className='car' onClick={() => setVehicle('Car')}>
                                <FontAwesomeIcon icon="fa-solid fa-car-side" />
                                <p>Car</p>
                            </div>
                            <div tabIndex={0} className='truck' onClick={() => setVehicle('Truck')}>
                                <FontAwesomeIcon icon="fa-solid fa-truck" />
                                <p>Truck</p>
                            </div>
                        </div>
                        <form className='reqDeliveryForm' onSubmit={e => e.preventDefault()}>
                            <div className='requestForm1'>
                                <label>
                                    <h3>Pick up Address</h3>
                                    <textarea onChange={(e) => setPickupAd(e.target.value)} placeholder="Type here..." />
                                </label>
                                <label>
                                    <h3>Destination Address</h3>
                                    <textarea onChange={(e) => setDestAd(e.target.value)} placeholder="Type here..." />
                                </label>
                                <div className='deliveryTime'>
                                    <label>
                                        <h3>Date</h3>
                                        <input onChange={(e) => setDate(e.target.value)} type={'date'} />
                                    </label>
                                    <label>
                                        <h3>Time</h3>
                                        <input onChange={(e) => setTime(e.target.value)} type={'time'} />
                                    </label>
                                </div>
                                <label>
                                    <h3>Description</h3>
                                    <textarea onChange={(e) => setDesc(e.target.value)} placeholder="Type here..." />
                                </label>
                            </div>
                            <div className='requestForm2'>
                                <label>
                                    <h3>Request Time</h3>
                                    <input type={'text'} onChange={(e) => setReqTime(e.target.value)} />
                                </label>
                                <label>
                                    <h3>Item Image</h3>
                                    <input type={'file'} onChange={(e) => setItemImg(e.target.value)} />
                                </label>
                                <label>
                                    <h3>Reciever Name</h3>
                                    <input type={'text'} onChange={(e) => setRcvName(e.target.value)} />
                                </label>
                                <label>
                                    <h3>Reciever Phone Number</h3>
                                    <input type={'tel'} onChange={(e) => setPhoneNum(e.target.value)} />
                                </label>
                                <label>
                                    <h3>Alternate Phone Number</h3>
                                    <input type={'tel'} onChange={(e) => setAltNum(e.target.value)} />
                                </label>
                                <button type='submit' onClick={() => setShowSummary(true)}>Next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}