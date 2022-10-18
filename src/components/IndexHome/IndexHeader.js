/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Truck4 from '../../assets/images/templates/Truck4.jpg'
import Truck1 from '../../assets/images/templates/Truck1.jpg'
import SeaDelivery from '../../assets/images/templates/sea-delivery.jpg'
import { NavLink } from 'react-router-dom'

const IndexHeader = () => {
  return (
    <header id="header" className="relative flex flex-col md:h-screen text-white">

      <nav className="p-6">
        <div className="flex flex-row items-center justify-end mt-2 lg:mr-4">
          <NavLink to="/login" className="text-sm hover:text-gray-300">SIGN UP</NavLink>
          <hr className="rotate-90 w-6" />
          <NavLink to="/login" className="text-sm hover:text-slate-300">LOGIN</NavLink>
          <NavLink to="/login" className="text-sm hover:text-slate-300 ml-4">CONTACT US</NavLink>
        </div>
      </nav>

      <div className="flex flex-col justify-center md:items-end md:mt-24 ">
        <div className="p-8 md:p-0 md:w-1/2">
          <h1 className="text-4xl md:text-6xl tracking-wider font-extrabold mb-2">LOGISTIC</h1>
          <h1 className="text-3xl md:text-6xl tracking-widest font-bold mb-6">DELIVERY</h1>
          <p className="w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto harum quisquam distinctio eligendi. Atque culpa laboriosam dolore debitis qui aliquam? Reiciendis enim quas sit eos dolor fugiat nisi voluptate consequuntur.
          </p>
        </div>
      </div>

      <div className="hidden items-center space-x-4 md:flex">
        <img src={Truck4} alt="truck" className="absolute -bottom-14 h-36 border-4 border-white md:right-[60%] lg:right-1/2" />
        <img src={Truck1} alt="truck" className="absolute right-56 -bottom-14 h-36 border-4 border-white" />
        <img src={SeaDelivery} alt="truck" className="absolute right-0 -bottom-14 h-36 border-4 border-white" />
      </div>
    </header>
  )
}

export default IndexHeader