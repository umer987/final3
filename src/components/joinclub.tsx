import React from 'react'

function Joinclub() {
  return (
    <div className="flex justify-center items-center  h-32 mt-24 bg-gray-50">
      <div className="text-center p-6 w- bg-white   rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Join the club and get the benefits
        </h1>
        <p className="text-gray-600 mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 p-3 focus:outline-none text-gray-700"
          />
          <button className="px-5 py-3 bg-gray-800 text-white font-medium hover:bg-indigo-700">
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Joinclub