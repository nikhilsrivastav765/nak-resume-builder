import { div } from 'motion/react-client'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
const ContactUs = () => {
  return (
    <div className="h-fit flex relative flex-wrap flex-col lg:flex-row">
      <h1 className="w-full text-center text-5xl lg:text-8xl font-semibold text-[#4F46E5] pt-20 lg:pt-16 pb-10">Contact Us</h1>
    <div className="lg:w-1/2 lg:pl-32 px-8 lg:px-0">
        <h1 className="text-5xl font-normal lg:w-half pb-8 text-center">Get In Touch</h1>
        <div className="flex gap-5 flex-col">
          <h3 className="text-[#4F46E5] font-semibold text-lg">Send a message</h3>
          <p className="font-normal text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus possimus consequatur magni?</p>
          <div>
          <form action="" className="relative flex flex-col lg:w-1/2 h-fit gap-10 pb-32">
            <input type="text" placeholder='Name' className="text-black outline-none border-b border-[#4F46E5]  placeholder:text-black " />
            <input type="text" placeholder='Email' className="text-black outline-none border-b border-[#4F46E5]  placeholder:text-black " />
            <input type="text" placeholder='Contact No.' className="text-black outline-none border-b border-[#4F46E5]  placeholder:text-black " />
            <input type="text" placeholder='Your Message' className="text-black outline-none border-b border-[#4F46E5]  placeholder:text-black " />
            <button type='submit' className="text-2xl bg-[#4F46E5] text-white w-fit px-5 py-1 rounded-md font-semibold absolute bottom-12 left-[50%] -translate-x-[50%]">Submit</button>
          </form>
          </div>
        </div>
        
    </div>
    <span className="h-[2px] bg-[#4F46E5] w-1/5 rotate-90 absolute top-[65%] left-[40%] hidden lg:flex"></span>

    <div className="lg:w-1/2 lg:pl-32 flex flex-col gap-1 px-8 lg:px-0 pb-32">
    <div className="flex gap-2 items-center pb-8">
    <FaLocationDot className="text-[#4F46E5] text-3xl"/>
    <h3 className="text-4xl text-[#4F46E5]">Address</h3>
    </div>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
    <h5>Lorem ipsum dolor sit amet consectetur..</h5>
    <h6>lorem, IN </h6>
</div>
    </div>
  )
}

export default ContactUs