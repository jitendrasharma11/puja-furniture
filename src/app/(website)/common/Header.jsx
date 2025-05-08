"use client"
import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaChevronDown, FaSearch } from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  let [isLivingOpen, setIsLivingOpen] = useState(false);
  let [sofaOpen, setSofaOpen] = useState(false);
  let [pageOpen, setPageOpen] = useState(false);

  return (
    <section>
      {/* Top Header Contact Area */}
      <div className='border-b border-[#ccc] py-2'>
        <div className='max-w-[1320px] m-auto flex justify-between'>
          <p className='text-[13px]'>Contact us 24/7 : +91-8092036180 / furniture@gmail.com</p>
          <Link href="/login" className="text-[13px] hover:text-[#C09578] cursor-pointer">
            Login / Register
          </Link>
        </div>
      </div>

      {/* Logo & Cart Section */}
      <header className="border-b border-[#ccc] py-4">
        <div className='flex items-center justify-between max-w-[1320px] m-auto'>
          <Link href={"/"} className="flex items-center space-x-2">
            <img src="/images/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="Home Icon" className="h-8" />
          </Link>

          {/* Search, Wishlist, Cart */}
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
            <button className="border border-[#ccc] hover:text-[#C09578] p-3">
              <FaHeart className="text-black" />
            </button>

            {/* Cart */}
            <div
              onClick={() => setCartOpen(true)}
              className="relative flex items-center border border-[#ccc] px-3 py-2 cursor-pointer"
            >
              <span style={{ top: '21%', left: '-10%' }} className="absolute bg-[#C09578] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
              <FaShoppingCart className="mr-2 text-black" />
              <span className="font-medium">Rs. 0.00</span>
              <FaChevronDown className="ml-1 text-black" />
            </div>
          </div>
        </div>
      </header>

      {/* Navbar Area */}
      <nav className="border-b border-[#ccc] relative z-40">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-center">
          <ul className="flex space-x-8 text-[13px] font-bold uppercase relative">

            <Link href={"/"} className="text-[#C09578] cursor-pointer py-3">Home</Link>

            {/* LIVING */}
            <li
              className="relative text-gray-800 hover:text-[#C09578] cursor-pointer flex items-center gap-1 py-3"
              onMouseEnter={() => setIsLivingOpen(true)}
              onMouseLeave={() => setIsLivingOpen(false)}
            >
              Living <FaChevronDown className="text-xs py-[1px]" />
              {isLivingOpen && (
                <div className="absolute top-10 left-0 w-[600px] bg-white shadow-xl border border-[#ccc] p-6 grid grid-cols-3 gap-6 text-left z-50">
                  <div>
                    <h4 className="text-[13px] font-bold mb-2">TABLES</h4>
                    <ul className="space-y-1 text-[13px] text-gray-600">
                      <li><Link href='/product-listing'>Side And End Tables</Link></li>
                      <li>Nest Of Tables</li>
                      <li>Console Table</li>
                      <li>Coffee Table Sets</li>
                      <li>Coffee Tables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold mb-2">LIVING STORAGE</h4>
                    <ul className="space-y-1 text-[13px] text-gray-600">
                      <li>Prayer Units</li>
                      <li>Display Unit</li>
                      <li>Shoe Racks</li>
                      <li>Chest Of Drawers</li>
                      <li>Cabinets And Sideboard</li>
                      <li>Bookshelves</li>
                      <li>TV Units</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold mb-2">MIRRORS</h4>
                    <ul className="space-y-1 text-[13px] text-gray-600">
                      <li>Wooden Mirrors</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* SOFA */}
            <li
              className="relative text-gray-800 hover:text-[#C09578] cursor-pointer flex items-center gap-1 py-3"
              onMouseEnter={() => setSofaOpen(true)}
              onMouseLeave={() => setSofaOpen(false)}
            >
              Sofa <FaChevronDown className="text-xs py-[1px]" />
              {sofaOpen && (
                <div className="absolute top-10 left-0 w-[600px] bg-white shadow-xl border border-[#ccc] p-6 grid grid-cols-3 gap-6 text-left z-50">
                  <div>
                    <h4 className="text-[13px] font-bold mb-2">Sofa Cum Bed</h4>
                    <ul className="space-y-1 text-[13px] text-gray-600">
                      <li>Wooden Sofa Cum Bed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold mb-2">Sofa Sets</h4>
                    <ul className="space-y-1 text-[13px] text-gray-600">
                      <li>L Shape Sofa</li>
                      <li>1 Seater Sofa</li>
                      <li>2 Seater Sofa</li>
                      <li>3 Seater Sofa</li>
                      <li>Wooden Sofa Sets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold mb-2">Swing Jhula</h4>
                    <ul className="space-y-1 text-[13px] text-gray-600">
                      <li>Wooden Jhula</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* PAGES */}
            <li
              className="relative text-gray-800 hover:text-[#C09578] cursor-pointer flex items-center gap-1 py-3"
              onMouseEnter={() => setPageOpen(true)}
              onMouseLeave={() => setPageOpen(false)}
            >
              Pages <FaChevronDown className="text-xs py-[1px]" />
              {pageOpen && (
                <div className="absolute top-10 left-0 w-[250px] bg-white shadow-xl border border-[#ccc] p-6 grid grid-cols-1 text-left z-50">
                  <ul className="space-y-1 text-[13px] text-gray-600">
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                    <li><Link href="/checkout">Checkout</Link></li>
                    <li><Link href="/frequently-questions">Frequently Questions</Link></li>
                  </ul>
                </div>
              )}
            </li>

            <Link href={"/contact"} className="text-gray-800 hover:text-[#C09578] cursor-pointer py-3">Contact Us</Link>
          </ul>
        </div>
      </nav>

      {/* Slide-In Cart */}
      <div className={`fixed top-0 right-0 h-full w-[350px] bg-white z-50 shadow-lg transform transition-transform duration-300 px-4 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b-[1px] border-[#ccc]">
          <h2 className="text-lg font-semibold">Cart</h2>
          <button onClick={() => setCartOpen(false)} className="text-3xl">&times;</button>
        </div>
        <div className="p-8 text-center">
          <img src="/images/my-Order.jpg" alt="Empty Cart" className="mx-auto w-48" />
          <p className="mt-6 text-gray-600 border-t-[1px] border-b-[1px] border-[#ccc] py-6">Your shopping cart is empty!</p>
        </div>
      </div>
    </section>
  );
}