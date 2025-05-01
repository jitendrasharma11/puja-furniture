import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
    return (
        <section className='py-2'>
            <h3 className="text-center text-[35px] font-bold text-[#333] mt-3">Shopping Cart</h3>
            <div className="border-b border-[#ccc] max-w-[1320px] m-auto pb-6">
                <div className="justify-center flex items-center mb-6 ">
                    <a href="/" className="hover:text-[#C09578] cursor-pointer text-[12px] text-[#555]">
                        Home
                    </a>
                    <span className="flex items-center text-[12px] text-[#555]">
                        <IoIosArrowForward className="mx-1 text-[#C09578]" />
                        Shopping Cart
                    </span>
                </div>
            </div>
            <div className=''>
                <div className='flex justify-center py-2'>
                    <img src="/images/my-Order.jpg" alt="" />
                </div>
                <p className='text-center text-[14px] text-[#555]'>Your shopping cart is empty!</p>
            </div>
        </section>
    )
}
