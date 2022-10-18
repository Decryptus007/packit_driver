import React from 'react'
import Truck4 from '../../assets/images/templates/Truck4.jpg'

function IndexAbout() {
  return (
    <div className="flex flex-col mt-6 h-auto md:flex-row">
      <div className="">
        <img src={Truck4} alt="truck" className="object-cover md:h-full" />
      </div>
      <div className="flex flex-col md:relative">
        <div className="pl-8 p-4 bg-slate-800 h-64 space-y-4">
          <h4 className="text-gray-400 text-sm mt-4">
            LITTLE ABOUT US
          </h4>
          <h1 className="tracker-wider font-bold text-3xl text-white">
            ABOUT PACKIT-LOGISTIC
          </h1>
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, adipisci saepe. A quibusdam similique odio, deserunt doloribus in perspiciatis esse.
          </p>
        </div>
        <div className="pl-8 p-4 bg-blue-300 top-52 left-9 md:w-80 md:pl-4 md:absolute">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illo porro labore. Veniam, autem explicabo.
        </div>
        <div className="pl-8 p-4 bg-gray-200 space-y-2 ">
          <h3 className="mt-6 font-bold text-sm text-gray-600 md:mt-16">
            OUR MISSION STATEMENT
          </h3>
          <p className="text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing culpa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexAbout