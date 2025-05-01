import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

export default function Login() {
  return (
    <section className="py-10">
      <h3 className="text-center text-[35px] font-bold text-[#333]">My Account</h3>
      <div className="border-b border-[#ccc] max-w-[1320px] m-auto pb-6">
        <div className="justify-center flex items-center mb-6 ">
          <a href="/" className="hover:text-[#C09578] cursor-pointer text-[12px] text-[#555]">
            Home
          </a>
          <span className="flex items-center text-[12px] text-[#555]">
            <IoIosArrowForward className="mx-1 text-[#C09578]" />
            My Account
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1320px] lg:m-auto gap-10 lg:gap-20 py-4 px-3 md:mx-2 sm:mx-2">
        {/* Login Section */}
        <div className="w-full ">
          <h2 className="text-2xl font-semibold mb-6 text-[#333]">Login</h2>
          <div className="p-6 border-[1px] border-[#ccc] rounded-2xl">
            <div className="mb-4 ">
              <label htmlFor="login-email" className="block text-gray-700 text-sm font-bold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  id="login-email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="login-password" className="block text-gray-700 text-sm font-bold mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="password"
                  id="login-password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="inline-block align-baseline font-semibold text-sm text-[#C09578] hover:text-[#a87f64]">
                Lost your password?
              </a>
              <button
                className="bg-[#C09578] rounded-[20px] hover:bg-black text-white font-bold py-2 px-6  focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Register Section */}
        <div className="w-full md:mx-2 sm:mx-2">
          <h2 className="text-2xl font-semibold mb-6 text-[#333]">Register</h2>
          <div className="p-6 border-[1px] border-[#ccc] rounded-2xl">
            <div className="mb-4">
              <label htmlFor="register-email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  id="register-email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="register-password" className="block text-gray-700 text-sm font-bold mb-2 text-[#555]">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="password"
                  id="register-password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              className="rounded-[20px] hover:bg-black bg-[#C09578] text-white font-bold py-2 px-6  focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}