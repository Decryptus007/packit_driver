import React from 'react'
import { NavLink } from 'react-router-dom'
import Truck22 from '../../assets/images/templates/Truck22.jpg'
import AirFreight2 from '../../assets/images/templates/air-freight2.jpg'
import SeaDelivery2 from '../../assets/images/templates/sea-delivery2.jpg'

const IndexSevices = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 mb-14 md:w-11/12">
        <div className="">
          <p className="text-gray-600 text-sm">
            LOGISTIC SERVICES
          </p>
          <p className="relative font-bold text-3xl text-gray-700 line">
            OUR SERVICES
          </p>
        </div>

        <div className="relative w-2 h-2 bg-white border border-gray-500 rounded-full dot"></div>
      </div>

      <div className="flex flex-col gap-y-8 items-center p-6 bg-gray-100 md:w-11/12 md:gap-x-6 md:p-4 md:gap-y-0 md:flex-row">

        <div className="flex flex-col w-full hover: shadow-md rounded-md bg-white overflow-hidden md:h-[450px] md:w-1/3">
          <img src={Truck22} alt="Truck" className="h-48 object-cover" />
          <div className="p-4 space-y-4">
            <h3 className="service-header">GROUND SHIPPING</h3>
            <p className="font-sansita text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam quidem nobis, velit corrupti dolores sint ab odit. Quae, nihil.</p>
            <NavLink to={''} className="inline-block p-2 rounded text-gray-700 font-bold text-xs hover:bg-gray-100">READ MORE</NavLink>
          </div>
        </div>

        <div className="flex flex-col w-full hover: shadow-md rounded-md bg-white overflow-hidden md:h-[450px] md:w-1/3">
          <img src={AirFreight2} alt="Truck" className="h-48 object-cover" />
          <div className="p-4 space-y-4">
            <h3 className="service-header">AIR FREIGHT</h3>
            <p className="font-sansita text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam quidem nobis, velit corrupti dolores sint ab odit. Quae, nihil.</p>
            <NavLink to={''} className="inline-block p-2 rounded text-gray-700 font-bold text-xs hover:bg-gray-100">READ MORE</NavLink>
          </div>
        </div>

        <div className="flex flex-col w-full hover: shadow-md rounded-md bg-white overflow-hidden md:h-[450px] md:w-1/3">
          <img src={SeaDelivery2} alt="Truck" className="h-48 object-cover" />
          <div className="p-4 space-y-4">
            <h3 className="service-header">SEA DELIVERY</h3>
            <p className="font-sansita text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam quidem nobis, velit corrupti dolores sint ab odit. Quae, nihil.</p>
            <NavLink to={''} className="inline-block p-2 rounded text-gray-700 font-bold text-xs hover:bg-gray-100">READ MORE</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexSevices