import React from 'react'

const IndexTestimonials = () => {
  return (
    <div className="flex flex-col items-center justify-between">

      <div className="text-center p-6 space-y-4">
        <h3 className="text-gray-600 font-semibold">WHAT PEOPLE SAY</h3 >
        <h1 className="font-bold tracking-wider text-4xl text-gray-700">TESTIMONIALS</h1>

        <div className="flex items-center justify-center">
          <hr className="bg-gray-400 w-6 mt-4" />
          <div className="h-2 w-2 border border-gray-200 rounded-full bg-gray-400"></div>
          <hr className="bg-gray-400 w-6 mt-4" />
        </div>
      </div>
      <div className="container flex items-center w-screen h-auto p-4 gap-x-4 overflow-x-auto snap-x">
        <div className="pt-10 pb-6 px-4 w-64 flex-shrink-0 border border-gray-300 shadow-md snap-center">
          <p className="mb-4 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo qui nisi quasi in ad perspiciatis asperiores voluptatem exercitationem assumenda?
          </p>
          <h3 className="font-bold text-gray-700">
            JONATHAN DOE
          </h3>
          <p className="font-bold text-xs text-gray-600">
            THEME DESIGNER
          </p>
        </div>
        <div className="pt-10 pb-6 px-4 w-64 flex-shrink-0 border border-gray-300 shadow-md snap-center">
          <p className="mb-4 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo qui nisi quasi in ad perspiciatis asperiores voluptatem exercitationem assumenda?
          </p>
          <h3 className="font-bold text-gray-700">
            VICTORIA ALLYSON
          </h3>
          <p className="font-bold text-xs text-gray-600">
            THEME DESIGNER
          </p>
        </div>
        <div className="pt-10 pb-6 px-4 w-64 flex-shrink-0 border border-gray-300 shadow-md snap-center">
          <p className="mb-4 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo qui nisi quasi in ad perspiciatis asperiores voluptatem exercitationem assumenda?
          </p>
          <h3 className="font-bold text-gray-700">
            DAVID IDOWU
          </h3>
          <p className="font-bold text-xs text-gray-600">
            THEME DESIGNER
          </p>
        </div>
        <div className="pt-10 pb-6 px-4 w-64 flex-shrink-0 border border-gray-300 shadow-md snap-center">
          <p className="mb-4 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo qui nisi quasi in ad perspiciatis asperiores voluptatem exercitationem assumenda?
          </p>
          <h3 className="font-bold text-gray-700">
            JOHN JOSEPH
          </h3>
          <p className="font-bold text-xs text-gray-600">
            THEME DESIGNER
          </p>
        </div>
        <div className="pt-10 pb-6 px-4 w-64 flex-shrink-0 border border-gray-300 shadow-md snap-center">
          <p className="mb-4 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo qui nisi quasi in ad perspiciatis asperiores voluptatem exercitationem assumenda?
          </p>
          <h3 className="font-bold text-gray-700">
            DOMNICK
          </h3>
          <p className="font-bold text-xs text-gray-600">
            THEME DESIGNER
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexTestimonials