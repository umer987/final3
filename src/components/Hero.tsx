import React from 'react'


const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex mt-5 md:flex-row flex-col items-center bg-purple-900">
    <div className=" lg:flex-grow h-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-purple-900 ">
      <h1 className="-scroll-mt- title-font ml-20 sm:text-4xl text-3xl  font-medium text-white">
      The furniture brand for the future, 
        <br className="hidden lg:inline-block" />
        with timeless designs
      </h1>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-gray-800 ml-20 border-0 py-2 px-6 focus:outline-none my-6 hover:bg-indigo-600 rounded text-lg">
          View Collection
        </button>
        
      </div>
      <p className="mb-8 leading-relaxed ml-20 text-white">
      A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
      </p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     
    
      <img
        className="object-cover object-center rounded"
        alt="/herophoto.png"  src="/logh.png"
      />
    
    </div>
  </div>
</section>








    </div>
  )
}

export default Hero