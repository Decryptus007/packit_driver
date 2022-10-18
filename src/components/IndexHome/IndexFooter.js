import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const IndexFooter = () => {
  return (
    <footer id="footer" className="">

      <div className="flex flex-col items-center justify-center p-4 pb-0 mt-5 h-auto gap-x-4 gap-y-2 md: p-8 md:flex-row">
        <div className="space-y-8 md:w-1/2">
          <h3 className="tracking-wide text-gray-700 text-lg font-bold">
            CONTACT US
          </h3>
          <div className="">
            <h3 className="tracker-wider font-bold text-md text-gray-600">PACKIT-LOGISTIC</h3>
            <span className="block font-bold text-sm text-gray-500">6, Patrol</span>
            <span className="block font-bold text-sm text-gray-500">Ilorin 240101 Nig.</span>
          </div>
          <div className="">
            <NavLink to={"tel:+2347037881906"} className="block font-bold text-sm text-gray-500">
              <span className="font-bold text-base text-gray-600">Phone: </span>+234 703 7881 906</NavLink>
            <NavLink to={"mailto:adesoroidowu@gmail.com"} className="block font-bold text-sm text-gray-500"><span className="font-bold text-base text-gray-600">Email: </span>Packit-Logistic@gmail.com</NavLink>
          </div>
        </div>
        <div className="mt-8 md:mt-0 space-y-6 md:space-y-12 md:w-1/2">
          <h3 className="tracking-wide text-gray-700 text-lg font-bold">
            NEWSLETTER SIGNUP
          </h3>
          <p className="font-bold text-sm text-gray-500">
            If you want to receive all our weekly update about new offers and discount, signup below.
          </p>
          <form action="#" className="flex items-center">
            <input type="email" name="email" id="email" placeholder="Email Address" required className="w-full py-2 px-4 bg-gray-200 text-sm focus:outline-none focus:ring-2" />
            <FontAwesomeIcon className='text-3xl bg-slate-400 p-1 relative' icon={['fas', 'paper-plane']} />
            <input type="submit" value="" className="px-2 absolute top-0 right-2" />
          </form>
        </div>
        <NavLink to={''}>
          <FontAwesomeIcon className='text-2xl text-gray-600 animate-bounce mt-4 md:mt-36' icon={['fas', 'angles-up']} />
        </NavLink>
      </div>

      <p className="text-center bg-slate-400 text-sm text-slate-800 p-4 mt-4">
        All Right Reserved Packit &copy; 2022
      </p>
    </footer>
  )
}

export default IndexFooter