
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MiniPage from "../../../../Utilities/MiniPage/MiniPage";

import './Summary.css'
// import driverImg from '../../../../../images/driverImg.png'

export default function Summary({ closeSum,
    reqSuccess,
    vehicle,
    pickupAd,
    destAd,
    date,
    time,
    desc,
    phoneNum,
    rcvName }) {

    const [window, setWindow] = useState(true)
    const availDrivers = [
        { name: 'Black Camaru', amount: 2500, vehicle: 'Bike', vIcon: <FontAwesomeIcon icon="fa-solid fa-motorcycle" /> },
        { name: 'Alfa Dogo', amount: 3500, vehicle: 'Car', vIcon: <FontAwesomeIcon icon="fa-solid fa-car-side" /> },
        { name: 'Abeke Alani', amount: 5000, vehicle: 'Truck', vIcon: <FontAwesomeIcon icon="fa-solid fa-truck" /> },
        { name: 'John Alafia', amount: 2500, vehicle: 'Keke', vIcon: <FontAwesomeIcon icon="fa-solid fa-caravan" /> },
        { name: 'Lateef Adeniran', amount: 2000, vehicle: 'Bike', vIcon: <FontAwesomeIcon icon="fa-solid fa-motorcycle" /> },
        { name: 'Korope Henry', amount: 3200, vehicle: 'Car', vIcon: <FontAwesomeIcon icon="fa-solid fa-car-side" /> },
        { name: 'Iilya Olen', amount: 3000, vehicle: 'Car', vIcon: <FontAwesomeIcon icon="fa-solid fa-car-side" /> },
        { name: 'Odin Vanguard', amount: 7000, vehicle: 'Truck', vIcon: <FontAwesomeIcon icon="fa-solid fa-truck" /> },
        { name: 'Ayobams Bimpe', amount: 3500, vehicle: 'Keke', vIcon: <FontAwesomeIcon icon="fa-solid fa-caravan" /> },
        { name: 'Total Comfort', amount: 2000, vehicle: 'Bike', vIcon: <FontAwesomeIcon icon="fa-solid fa-motorcycle" /> },
    ]

    let output
    switch (vehicle) {
        case "Bike":
            output = (
                <div id="vehicle" className="sumDisplay">
                    <p>{vehicle}</p>
                    <FontAwesomeIcon icon="fa-solid fa-motorcycle" />
                </div>
            )
            break;
        case "Keke":
            output = (
                <div id="vehicle" className="sumDisplay">
                    <p>{vehicle}</p>
                    <FontAwesomeIcon icon="fa-solid fa-caravan" />
                </div>
            )
            break;
        case "Car":
            output = (
                <div id="vehicle" className="sumDisplay">
                    <p>{vehicle}</p>
                    <FontAwesomeIcon icon="fa-solid fa-car-side" />
                </div>
            )
            break;
        case "Truck":
            output = (
                <div id="vehicle" className="sumDisplay">
                    <p>{vehicle}</p>
                    <FontAwesomeIcon icon="fa-solid fa-truck" />
                </div>
            )
            break;
        default:
            break;
    }

    return (
        <MiniPage closeSum={closeSum} >
            {
                window ?
                    <div className="summary">
                        <h2>Summary</h2><hr />
                        <div className="sumHolder">
                            <p>Vehicle Type</p>
                            {output}
                        </div>
                        <div className="sumHolder">
                            <p>Address Details</p>
                            <div className="sumDisplay">
                                <p>Pickup Address:</p>
                                <small>{pickupAd}</small>
                                <p style={{ marginTop: "2%" }}>Destination Address:</p>
                                <small>{destAd}</small>
                                <p style={{ marginTop: "2%" }}>Pickup Date/Time:</p>
                                <h2 style={{ fontWeight: 500 }}>{date}/{time}</h2>
                            </div>
                        </div>
                        <div className="sumHolder">
                            <p>Delivery Details</p>
                            <div className="sumDisplay">
                                <p>Description:</p>
                                <small>{desc}</small>
                                <p>Reciever Name:</p>
                                <small>{rcvName}</small>
                                <p>Reciever Phone No:</p>
                                <small>{phoneNum}</small>
                            </div>
                        </div>
                        <div className="sumBtns">
                            <div onClick={() => closeSum()}>Back</div>
                            <div onClick={() => setWindow(!window)}>Create Request</div>
                        </div>
                    </div>
                    :
                    <div className="drivers">
                        <h2>Available Drivers</h2><hr />
                        <section>
                            {availDrivers.map((driver, id) => {
                                let outputDrivers
                                if (vehicle === driver.vehicle) {
                                    outputDrivers = (
                                        <div key={id} className="driverCard">
                                            <div className="driverName">
                                                <div className="driverP">
                                                    <FontAwesomeIcon icon="fa-regular fa-circle-user" />
                                                    <p>{driver.name}</p>
                                                </div>
                                                {driver.vIcon}
                                            </div>
                                            <div className="driverActn">
                                                <p className="driverPrice">Total Amount <span>₦{driver.amount}</span></p>
                                                <p className="driverAss" onClick={() => reqSuccess()}>Assign Driver</p>
                                            </div>
                                        </div>
                                    )
                                }
                                return outputDrivers
                            })}
                        </section>
                    </div>
            }
        </MiniPage>
    )
}