'use client';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import FaqsSection from './FaqsComponents/FaqsComponents.jsx';

export default function FrequentlyQuestionsPage() {
  return (
    <section>
      <h3 className="text-center text-[35px] font-bold text-[#333] mt-3">Frequently Questions</h3>
      <div className="border-b border-[#ccc] max-w-[1320px] m-auto pb-6">
        <div className="justify-center flex items-center mb-6">
          <a href="/" className="hover:text-[#C09578] cursor-pointer text-[12px] text-[#555]">
            Home
          </a>
          <span className="flex items-center text-[12px] text-[#555]">
            <IoIosArrowForward className="mx-1 text-[#C09578]" />
            Frequently Questions
          </span>
        </div>
      </div>
      <FaqsSection />
    </section>
  );
}