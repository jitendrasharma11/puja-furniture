"use client";
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';

export default function BestSelling() {
  let Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  };
  return (
    <section>
      {/* Section img banner */}
      <div className="relative w-full h-150 my-6">
      <Image
        src="/images/bj.jpg"
        alt="New Trending Collection"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start p-12 bg-black/30">
        <div className='lg:ms-50'>
          <h1 className="text-5xl font-bold text-white mb-4">New Trending Collection</h1>
          <p className="text-lg text-white mb-6">
            We Believe That Good Design is Always in Season
          </p>
          <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
            SHOPPING NOW
          </button>
        </div>
      </div>
      {/* Section Title */}
    </div>
      <div className='flex items-center gap-2 mb-6 justify-center'>
        <h2 className="text-2xl font-bold">Bestselling Products</h2>
        <span className='w-[70%] h-[1px] bg-[#ccc]'></span>
      </div>

      <div className='max-w-[1320px] mx-auto py-6'>
    <Slider {...Settings}>
      <div className='px-2'>
        <div className="bg-white shadow-2xl rounded text-center mb-2">
          <img
            src="/images/1621171973378Isaac%20Chest%20of%20Drawer_.jpg"
            alt="Isaac Chest Of Drawer"
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-sm text-gray-500 mt-4">Chest Of Drawers</p>
          <h3 className="text-base font-semibold mt-1">Isaac Chest Of Drawer</h3>
          <div className="mt-2">
            <span className="line-through text-gray-400 text-sm mr-1">Rs. 32,000</span>
            <span className="text-[#c28b6b] font-semibold text-sm">Rs. 25,000</span>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button className="px-3 py-1 rounded bg-gray-200 hover:bg-[#C09578] text-sm"><FaRegHeart /></button>
            <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-1 rounded">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className='px-2'>
        <div className="bg-white shadow-2xl rounded text-center pb-2">
          <img
            src="/images/1621171973378Isaac%20Chest%20of%20Drawer_.jpg"
            alt="Isaac Chest Of Drawer"
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-sm text-gray-500 mt-4">Chest Of Drawers</p>
          <h3 className="text-base font-semibold mt-1">Isaac Chest Of Drawer</h3>
          <div className="mt-2">
            <span className="line-through text-gray-400 text-sm mr-1">Rs. 32,000</span>
            <span className="text-[#c28b6b] font-semibold text-sm">Rs. 25,000</span>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button className="px-3 py-1 rounded bg-gray-200 hover:bg-[#C09578] text-sm"><FaRegHeart /></button>
            <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-1 rounded">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className='px-2'>
        <div className="bg-white shadow-2xl rounded text-center pb-2">
          <img
            src="/images/1621171973378Isaac%20Chest%20of%20Drawer_.jpg"
            alt="Isaac Chest Of Drawer"
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-sm text-gray-500 mt-4">Chest Of Drawers</p>
          <h3 className="text-base font-semibold mt-1">Isaac Chest Of Drawer</h3>
          <div className="mt-2">
            <span className="line-through text-gray-400 text-sm mr-1">Rs. 32,000</span>
            <span className="text-[#c28b6b] font-semibold text-sm">Rs. 25,000</span>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button className="px-3 py-1 rounded bg-gray-200 hover:bg-[#C09578] text-sm"><FaRegHeart /></button>
            <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-1 rounded">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className='px-2'>
        <div className="bg-white shadow-2xl rounded text-center pb-2">
          <img
            src="/images/1621171973378Isaac%20Chest%20of%20Drawer_.jpg"
            alt="Isaac Chest Of Drawer"
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-sm text-gray-500 mt-4">Chest Of Drawers</p>
          <h3 className="text-base font-semibold mt-1">Isaac Chest Of Drawer</h3>
          <div className="mt-2">
            <span className="line-through text-gray-400 text-sm mr-1">Rs. 32,000</span>
            <span className="text-[#c28b6b] font-semibold text-sm">Rs. 25,000</span>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button className="px-3 py-1 rounded bg-gray-200 hover:bg-[#C09578] text-sm"><FaRegHeart /></button>
            <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-1 rounded">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className='px-2'>
        <div className="bg-white shadow-2xl rounded text-center pb-2">
          <img
            src="/images/1621171973378Isaac%20Chest%20of%20Drawer_.jpg"
            alt="Isaac Chest Of Drawer"
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-sm text-gray-500 mt-4">Chest Of Drawers</p>
          <h3 className="text-base font-semibold mt-1">Isaac Chest Of Drawer</h3>
          <div className="mt-2">
            <span className="line-through text-gray-400 text-sm mr-1">Rs. 32,000</span>
            <span className="text-[#c28b6b] font-semibold text-sm">Rs. 25,000</span>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button className="px-3 py-1 rounded bg-gray-200 hover:bg-[#C09578] text-sm"><FaRegHeart /></button>
            <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-1 rounded">Add To Cart</button>
          </div>
        </div>
      </div>
    </Slider>
  </div>
    </section >
  )
}