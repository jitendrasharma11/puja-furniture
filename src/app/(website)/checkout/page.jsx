import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

export default function Checkout() {
  const inputClass =
    "border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#b8865a]";

  return (

    <section>
      <h3 className="text-center text-[35px] font-bold text-[#333] mt-3 pt-3">Checkout</h3>
      <div className="border-b border-[#ccc] max-w-[1320px] m-auto pb-6">
        <div className="justify-center flex items-center mb-6">
          <a href="/" className="hover:text-[#C09578] cursor-pointer text-[12px] text-[#555]">
            Home
          </a>
          <span className="flex items-center text-[12px] text-[#555]">
            <IoIosArrowForward className="mx-1 text-[#C09578]" />
            Checkout
          </span>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto p-6">
        {/* Billing Details Section */}
        <div className="bg-white shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="bg-gray-800 text-white px-4 py-2 font-semibold text-lg">
            BILLING DETAILS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="text" placeholder="Name*" className={inputClass} />
            <input type="text" placeholder="Mobile Number*" className={inputClass} />
            <input type="text" placeholder="Billing Name*" className={inputClass} />
            <input type="email" placeholder="Billing Email*" className={inputClass} />
            <input
              type="text"
              placeholder="Billing Mobile Number*"
              className={`${inputClass} md:col-span-2`}
            />
            <input
              type="text"
              placeholder="Billing Address*"
              className={`${inputClass} md:col-span-2`}
            />
            <select className={`${inputClass} md:col-span-2`}>
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              {/* Add more countries as needed */}
            </select>
            <input type="text" placeholder="State*" className={inputClass} />
            <input type="text" placeholder="City*" className={inputClass} />
          </div>

          <div className="mt-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox mr-2" />
              Ship To A Different Address?
            </label>
          </div>

          <textarea
            placeholder="Order Notes (e.g., special instructions)"
            className={`${inputClass} mt-4 w-full h-24`}
          ></textarea>
        </div>

        {/* Your Order Section */}
        <div className="bg-white shadow-md p-6 border border-gray-200">
          <h2 className="bg-gray-800 text-white px-4 py-2 font-semibold text-lg">
            YOUR ORDER
          </h2>

          <table className="w-full mt-4 text-sm">
            <thead>
              <tr>
                <th className="text-left p-2">Product</th>
                <th className="text-right p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Cart Subtotal</td>
                <td className="p-2 text-right">Rs. 0</td>
              </tr>
              <tr>
                <td className="p-2">Discount (-)</td>
                <td className="p-2 text-right">Rs. 0</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Order Total</td>
                <td className="p-2 text-right font-bold">Rs. 0</td>
              </tr>
            </tbody>
          </table>

          <button className="bg-[#b8865a] text-white px-6 py-2 mt-6 hover:bg-[#9e7248] rounded">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}
