import React from 'react'
import { Link } from 'react-router'
const Hero = () => {
  return (
    <div><div className="flex px-4 m-auto justify-between h-full flex-col py-20 lg:items-center lg:py-32 lg:px-24
    ">
<div className=" flex flex-col gap-5 lg:max-w-7xl lg:gap-8 lg:items-center">
<h1 className=" text-center leading-[1.3] tracking-normal font-bold text-5xl lg:text-9xl lg:pb-8  lg:leading-[1.3] lg:font-medium">Welcome to <span
    className="text-[#4F46E5] font-bold">NAK
    Resume Builder</span></h1>
<h1 className=" text-4xl lg:font-semibold tracking-tight lg:tracking-normal lg:leading-[1.2] lg:pb-8 text-center lg:text-6xl">We are here to help you in
  building good
  resume for your job.</h1>
<h3 className=" font-normal text-xl lg:pb-8 text-center lg:text-5xl">Let's start by choosing layout.</h3>
<div className="flex gap-5 justify-center">
  <button className=" bg-[#4F46E5] rounded-full text-white font-medium text-xs px-3 lg:text-lg lg:px-5 lg:py-3"><Link to="/layouts">Choose Layout</Link></button>
  <button className="py-3 px-5 rounded-full  border-[1px] lg:border-2 border-gray-500 text-xs lg:text-lg font-semibold"><Link to="/about">About Us</Link></button>
</div>
</div>
</div></div>
  )
}

export default Hero