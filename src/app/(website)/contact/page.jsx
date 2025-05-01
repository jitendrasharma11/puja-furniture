import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className='py-2'>
      <h3 className="text-center text-[35px] font-bold text-[#333] mt-3">Contact Us</h3>

      <div className="border-b border-[#ccc] max-w-[1320px] m-auto pb-6">
        <div className="justify-center flex items-center mb-6">
          <a href="/" className="hover:text-[#C09578] cursor-pointer text-[12px] text-[#555]">
            Home
          </a>
          <span className="flex items-center text-[12px] text-[#555]">
            <IoIosArrowForward className="mx-1 text-[#C09578]" />
            Contact Us
          </span>
        </div>
      </div>
      <div className="mb-8 max-w-[1320px] m-auto ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.019456660857!2d86.4326039751162!3d23.782321478648612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bdd8e6e41e3d%3A0xa2a46a1aa31c9bc8!2sMasterji%20Pix%20%3A%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1746112298556!5m2!1sen!2sin"
          width="100%"
          height="450"
          className='sm:px-2'
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-[20px] font-bold mb-6">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gray-700 mt-1" />
                <span>Address : Claritas est etiam processus dynamicus</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-gray-700 mt-1" />
                <span>9781234560</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-gray-700 mt-1" />
                <span>furniture@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Form */}
          <div>
            <h2 className="text-[20px] font-bold mb-6">Tell Us Your Question</h2>
            <form className="space-y-5">
              <div>
                <label className="block font-semibold mb-1 text-[13px]">Your Name (required)</label>
                <input type="text" placeholder="Name *" className="w-full border border-[#5A5A5A] p-3" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[13px]">Your Email (required)</label>
                <input type="email" placeholder="Email *" className="w-full border p-3" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[13px]">Your Mobile Number (required)</label>
                <input type="tel" placeholder="Mobile Number *" className="w-full border p-3 border-[#5A5A5A]" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[13px]">Subject</label>
                <input type="text" placeholder="Subject *" className="w-full border p-3 border-[#5A5A5A]" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[13px]">Your Message</label>
                <textarea rows="5" placeholder="Message *" className="w-full border p-3 border-[#5A5A5A]"></textarea>
              </div>
              <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-[#C09578]">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  )
}
