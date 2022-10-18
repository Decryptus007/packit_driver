import React from 'react'

const IndexFeatures = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 bg-gray-200 p-8 md:mt-12 md:gap-x-4 lg:flex-row">

      <div className="p-4 space-y-4 md:self-start md:w-2/3 lg:w-1/3">
        <h3 className="text-gray-600 text-md">
          AMAZING FEATURES
        </h3>
        <h1 className="font-bold text-2xl text-gray-700">
          WE OFFER QUICK & POWERFUL SOLUTION FOR TRANSPORT
        </h1>
      </div>

      <div className="flex flex-col gap-y-8 items-center justify-center md:gap-x-4 md:w-full md:flex-row lg:flex-col">
        <div className="h-[160px] flex items-center p-6 space-x-6 bg-white rounded-sm hover:shadow-md">
          <i className="fas fa-ship text-5xl text-gray-700"></i>
          <div className="space-y-2">
            <h2 className="tracking-wide text-gray-700 text-lg font-bold">QUICKEST CARGO</h2>
            <p className="text-sm font-sansita text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam a, soluta quod debitis exercitationem.
            </p>
          </div>
        </div>
        <div className="h-[160px] flex items-center p-6 space-x-6 bg-white rounded-sm hover:shadow-md">
          <i className="fas fa-train-subway text-5xl text-gray-700"></i>
          <div className="space-y-2">
            <h2 className="tracking-wide text-gray-700 text-lg font-bold">GROUND SHIPPING</h2>
            <p className="text-sm font-sansita text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam a, soluta quod debitis exercitationem.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 items-center justify-center md:gap-x-4 md:w-full md:flex-row lg:flex-col">
        <div className="h-[160px] flex items-center p-6 space-x-6 bg-white rounded-sm hover:shadow-md">
          <i className="fas fa-plane-departure text-5xl text-gray-700"></i>
          <div className="space-y-2">
            <h2 className="tracking-wide text-gray-700 text-lg font-bold">FAST AIR FREIGHT</h2>
            <p className="text-sm font-sansita text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam a, soluta quod debitis exercitationem.
            </p>
          </div>
        </div>
        <div className="h-[160px] flex items-center p-6 space-x-6 bg-white rounded-sm hover:shadow-md">
          <i className="fas fa-stopwatch text-5xl text-gray-700"></i>
          <div className="space-y-2">
            <h2 className="tracking-wide text-gray-700 text-lg font-bold">TIMELY DELIVERY</h2>
            <p className="text-sm font-sansita text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam a, soluta quod debitis exercitationem.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default IndexFeatures