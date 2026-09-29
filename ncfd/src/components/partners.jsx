import React from "react";
import expoImg from "../assets/image/expo.jpg";


function Partners() {
  return(
      <>
        <div className="ml-12 mr-60 p-8 ">
          <h1 className="text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            Grow with Eightcap
          </h1>
          <div 
            style={{ backgroundImage: `url(${expoImg})` }} 
            className="w-full h-110 bg-cover bg-center rounded-xl"
          ></div>
        </div>
      <p class="pt-5 pl-20 pr-110 text-2xl font-medium text-pretty text-black-300 sm:text-xl/8">We're more than just a broker, we're a dedicated growth partner. We support partners with tools, infrastructure and guidance designed to help you grow and support your network with confidence.</p>

      <p class="pt-20 pl-40 pr-110 text-1xl font-mediu text-pretty text-oklch(56% 0.021 213.5-300 sm:text-xl/8">Discover more</p>
          
        <div className="flex flex-col gap-3xl xl:pr-5xl items-baseline flex-1">
          <div className="flex flex-col gap-3xl xl:pr-5xl items-baseline flex-1">
            <p className="typography-label-md text-lg fg-text-default-black">Introducing Brokers (IBs)</p>
            
          </div>
        </div>
      </>
    )
}

export default Partners;