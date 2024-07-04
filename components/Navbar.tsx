"use client"
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMicOutline, IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showName, setShowName] = useState(false);

    const toggleName = () => setShowName(!showName);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


  return (
    <div className="w-100">
      <nav className="w-[80%] mx-auto mt-8">
        <div className="flex justify-between">
          <div className="flex justify-between gap-20 items-center">
            <h1 className="text-4xl font-bold uppercase ">re</h1>
            <div className="hidden justify-between h-10 gap-1 lg:flex">
              <div className="flex bg-gray-200 rounded-full">
                <div className="bg-white p-2 rounded-full m-1">
                  <IoSearchOutline />
                </div>
                <input
                  className="bg-gray-200 ps-2 rounded-full outline-none text-xs w-44"
                  type="text"
                  placeholder="search"
                />
              </div>
              <div className="bg-white p-2 m-1 rounded-full border border-gray-300">
                <IoMicOutline />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-2">
            <div className="bg-black p-2 m-1 rounded-full border border-gray-300 text-white">
              <FiPhone />
            </div>

            <div className="hidden sm:flex bg-gray-200 rounded-full">
              <input
                className={`bg-gray-200 ms-3  px-1 rounded-full outline-none text-xs w-48  transition ease-in-out delay-150   ${!showName && 'hidden'}`}
                type="text"
                value="Asharudheen kp web developer "
                readOnly
              />
              <div className={`bg-white p-2 rounded-full m-1 cursor-pointer`} onClick={toggleName}>
                <FaRegUser />
              </div>
            </div>

            <div className="flex bg-black rounded-full p-1 items-center px-5 py-2 text-white gap-1 cursor-pointer" onClick={toggleMenu}>
              <p>menu</p>
              <span>
                <HiOutlineMenuAlt3 />
              </span>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="bg-gray-100 py-2">
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 py-1 px-4 block">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 py-1 px-4 block">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 py-1 px-4 block">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 py-1 px-4 block">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;


