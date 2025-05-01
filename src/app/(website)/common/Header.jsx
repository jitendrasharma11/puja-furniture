import React from 'react'
import { FaHeart, FaShoppingCart, FaChevronDown, FaSearch } from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
  return (
    <section>
      {/* Top Header Contact Area*/}
      <div className='border-b border-[#ccc] bor max-w-[100%] py-2'>
        <div className='max-w-[1320px] m-auto flex justify-between '>
          <p className='text-[13px]'>Contact us 24/7 : +91-8092036180 / furniture@gmail.com</p>
          <Link href="/login" className="text-[13px] hover:text-[#C09578] cursor-pointer">
            Login / Register
          </Link>
        </div>
      </div>
      {/* Logo & Cart Section*/}
      <header className="border-b border-[#ccc] max-w-[100%]  py-4">
        <div className='flex items-center justify-between  max-w-[1320px] m-auto '>
          <Link href={"/"} className="flex items-center space-x-2">
            <img src="/images/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="Home Icon" className="h-8" />
          </Link>
          {/* Logo & Search Icon*/}
          <div className="flex items-center space-x-5">
            {/* Search */}
            <div className="flex items-center border border-[#ccc] px-3 py-2">
              <input
                type="text"
                placeholder="Search product..."
                className="outline-none text-sm placeholder:text-gray-500 py-1"
              />
              <FaSearch className="ml-2 text-black" />
            </div>

            {/* Wishlist */}
            <button className="border border-[#ccc]  hover:text-[#C09578] p-3 ">
              <FaHeart className="text-black" />
            </button>

            {/* Cart */}
            <div className="relative flex items-center border border-[#ccc] px-3 py-2  ">
              <span style={{ top: '21%', left: '-10%' }} className="absolute  bg-[#C09578] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
              <FaShoppingCart className="mr-2 text-black" />
              <span className="font-medium">Rs. 0.00</span>
              <FaChevronDown className="ml-1 text-black" />
            </div>
          </div>
        </div>
      </header>
      {/* Navbar Area*/}
      <nav className="border-b border-[#ccc] py-2 ">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-center">
          <ul className="flex space-x-8 text-[13px] font-bold uppercase">
            <Link href={"/"} className="text-[#C09578] cursor-pointer">Home</Link>

            <li className="text-gray-800 hover:text-[#C09578] cursor-pointer flex items-center gap-1">
              Living
              <FaChevronDown className="text-xs mt-[1px]" />
            </li>

            <li className="text-gray-800 hover:text-[#C09578] cursor-pointer flex items-center gap-1">
              Sofa
              <FaChevronDown className="text-xs mt-[1px]" />
            </li>

            <li className="text-gray-800 hover:text-[#C09578] cursor-pointer flex items-center gap-1">
              Pages
              <FaChevronDown className="text-xs mt-[1px]" />
            </li>

            <Link href={"/contact"} className="text-gray-800 hover:text-[#C09578] cursor-pointer">Contact Us</Link>
          </ul>
        </div>
      </nav>
    </section>
  )
}
