import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom"; // Fixed incorrect import
const Menu = ({ toggleMenu, isMenuOpen }) => {

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]); // Runs only when isMenuOpen changes

  return (
    <div
      className={`menu fixed w-full h-screen bg-gray-100 z-[1] py-3 top-0 left-0 transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-5">
        <h1 className="lg:text-2xl font-bold text-xl">
          <span className="text-[#4F46E5]">NAK</span>res.builder
        </h1>
        <button onClick={toggleMenu}>
          <RxCross1 className="text-3xl text-black mr-3" />
        </button>
      </div>
      <div className="relative">
        <ul className="flex gap-10 flex-col px-5 mt-5">
          <li className="text-gray-600 text-xl font-semibold">
            <Link onClick={toggleMenu} className="flex justify-between" to="/home">
              Home <TbMathGreater className="text-gray-500 text-xl mr-4 font-semibold" />
            </Link>
          </li>
          <li className="text-gray-600 text-xl font-semibold">
            <Link onClick={toggleMenu} className="flex justify-between" to="/about">
              About Us <TbMathGreater className="text-gray-500 text-xl mr-4 font-semibold" />
            </Link>
          </li>
          <li className="text-gray-600 text-xl font-semibold">
            <Link onClick={toggleMenu} className="flex justify-between" to="/contact">
              Contact Us <TbMathGreater className="text-gray-500 text-xl mr-4 font-semibold" />
            </Link>
          </li>
          <li className="text-gray-600 text-xl font-semibold">
            <Link onClick={toggleMenu} className="flex justify-between" to="/layouts">
              Browse Layouts <TbMathGreater className="text-gray-500 text-xl mr-4 font-semibold" />
            </Link>
          </li>
          <li>
        <button
              onClick={toggleMenu}
              className="text-3xl bg-[#4F46E5] text-white w-full py-3 font-semibold"
              to="/layouts" 
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
